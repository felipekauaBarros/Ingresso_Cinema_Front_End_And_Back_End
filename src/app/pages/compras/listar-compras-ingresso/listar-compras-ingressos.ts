import { Component, OnInit } from '@angular/core';
import { IngressoDto } from "../../../api/models/ingresso-dto";
import { IngressoControllerService } from "../../../api/services/ingresso-controller.service";
import { debounceTime, Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ConfirmationDialog, ConfirmationDialogData,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-home-compras-ingressos',
  templateUrl: './listar-compras-ingressos.html',
  styleUrls: ['./listar-compras-ingressos.scss']
})
export class ListarComprasIngressos implements OnInit {
  controle = new FormControl();
  ingressos: IngressoDto[] = [];
  filtartIngressos!: Observable<IngressoDto[]>; // Auto completa
  ingressosFiltrados: IngressoDto[] = [];
  nomeBusca = new FormControl();
  totalCompra: number = 0;


  constructor(private ingressoService: IngressoControllerService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.getIngressos();
  }


  private getIngressos() {
    this.ingressoService.listAll().subscribe(
      data => {
        this.ingressos = data;
        this.ingressosFiltrados = data;
        console.log(JSON.stringify(data));
      },
      error => {
        console.log('Ocorreu um erro ao obter os ingressos:', error);
      }
    );
  }



  public buscarIngresso() {
    const termoBusca = this.nomeBusca.value;
    if (typeof termoBusca === 'string') {
      const termoBuscaLowerCase = termoBusca.toLowerCase().trim();
      if (termoBuscaLowerCase) {
        this.ingressosFiltrados = this.ingressos.filter(ingresso =>
          this.displayFn(ingresso).toLowerCase().includes(termoBuscaLowerCase)
        );
      } else {
        this.ingressosFiltrados = this.ingressos;
      }
    }
  }

  public displayFn(ingresso: IngressoDto): string {
    if (ingresso && ingresso.descricaoIngresso && ingresso.nomeEvento) {
      return `${ingresso.descricaoIngresso} ${ingresso.nomeEvento}`;
    }
    return '';
  }

  public limparBusca() {
    this.nomeBusca.setValue('');
    this.controle.setValue('');
    this.buscarIngresso();
  }

  public aumentarQuantidade(ingresso: IngressoDto) {
    if (ingresso.quantidadeIngresso !== undefined  && ingresso.quantidadeCompra !== undefined && ingresso.quantidadeIngresso > 0) {
      ingresso.quantidadeIngresso--;
      ingresso.quantidadeCompra++;
    }

    this.valorUnitarioPorIngresso(ingresso);
    console.log(ingresso);
  }


  public diminuirQuantidade(ingresso: IngressoDto) {
    if (
      ingresso.quantidadeIngresso !== undefined &&
      ingresso.quantidadeCompra !== undefined &&
      ingresso.quantidadeCompra > 0
    ) {
      ingresso.quantidadeCompra--;
      ingresso.quantidadeIngresso++;
    }
    this.valorUnitarioPorIngresso(ingresso);
    this.atualizarQuantidadeBackend(ingresso)
  }




  public valorUnitarioPorIngresso (ingresso: IngressoDto){
    if (ingresso.valorIngresso !== undefined && ingresso.quantidadeIngresso !== undefined && ingresso.quantidadeCompra !== undefined ) {
      ingresso.valorTotal = ingresso.quantidadeCompra * ingresso.valorIngresso;
    }
    this.atualizarQuantidadeBackend(ingresso);
    console.log(ingresso);
  }
  public fazerCompra(ingresso: IngressoDto) {
    if (ingresso.quantidadeCompra !== 0 && ingresso.valorTotal !== undefined) {
      this.totalCompra += ingresso.valorTotal;
      this.confirmarAcao(ingresso);
    } else {
      this.showMensagemSimples("Não é possível fazer a compra. Informações incompletas.");
    }
  }


  private atualizarQuantidadeBackend(ingresso: IngressoDto) {
    const parametro = {
      ingressoId: ingresso.idCodigo || 0,
      novaQuantidadeIngresso: ingresso.quantidadeIngresso || 0,
      novaQuantidadeCompra: ingresso.quantidadeCompra || 0,
    };

    this.ingressoService.atualizarQuantidadeIngresso(parametro)
      .subscribe(
        () => {
          console.log("Quantidade atualizada com sucesso no backend!");
        },
        error => {
          console.log("Erro ao atualizar a quantidade no backend:", error);
        }
      );
  }



  public finalizarCompra():void {
    this.showMensagemSimples("Valor total da sua compra é: R$ " + this.totalCompra);
    this.router.navigate(["/ingresso"]);
  }

  public confirmarAcao(ingressoDto: IngressoDto): void {
    if (!ingressoDto) {
      console.log('A compra de ingresso está vazia.');
      return;
    }

    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Mensagem!?',
        mensagem: `Adicionado no carrinho ${ingressoDto.descricaoIngresso}
           Valor do carrinho ${ingressoDto.valorTotal}
           Quantidade a comprar ${ingressoDto.quantidadeCompra} !!?`,
        textoBotoes: {
          ok: 'Confirmar',
          cancel: 'Cancelar',
        },
        dado: ingressoDto
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.atualizarQuantidadeBackend(confirmed.dado);
        ingressoDto.quantidadeCompra = 0;
      }
    });
  }


  showMensagemSimples(mensagem: string, duracao: number = 7000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }


  public removeCompraTotal(ingresso: IngressoDto) {
    if (
      ingresso.quantidadeCompra !== 0 &&
      ingresso.quantidadeCompra !== undefined && ingresso.valorTotal !== undefined) {
      this.totalCompra -= ingresso.valorTotal;
      ingresso.valorTotal =0;
      this.confirmarAcao(ingresso);
    }else {
      this.showMensagemSimples("Não é possível fazer a compra. Informações incompletas.");
    }
  }
  private filtrar(): IngressoDto[] {
    const filtrarValor = this.normalizar(this.controle.value);
    return this.ingressos.filter(ingresso =>
      ingresso.descricaoIngresso && this.normalizar(ingresso.descricaoIngresso).includes(filtrarValor)
    );
  }

  private normalizar(value: string): string {
    if (value) {
      return value.toLowerCase().replace(/\s/g, '');
    }
    return '';
  }

  private filtrarIngresso() {
    /*this.filtartIngressos = this.controle.valueChanges.pipe(
      startWith(''),
      debounceTime(100),
      map(value => this.filtrar())
    );*/
  }

}
