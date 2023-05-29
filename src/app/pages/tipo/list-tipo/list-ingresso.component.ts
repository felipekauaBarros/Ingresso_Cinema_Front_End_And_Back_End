import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {IngressoControllerService} from "../../../api/services/ingresso-controller.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ConfirmationDialog,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {IngressoDto} from "../../../api/models/ingresso-dto";

@Component({
  selector: 'app-list-tipo',
  templateUrl: './list-ingresso.component.html',
  styleUrls: ['./list-ingresso.component.scss']
})

export class ListIngressoComponent implements OnInit {
  displayedColumns = ['idCodigo', 'nomeCliente', 'nomeFilme', 'salaFilme', 'assentoSala', 'dataFilme', 'categoriaFilme', 'tipoIngresso', 'acao', 'acao2'];
  // @ts-ignore
  dataSource: MatTableDataSource<IngressoDto> = new MatTableDataSource<IngressoDto>([]);

  constructor(
    public ingressoService: IngressoControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar ) {
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.ingressoService.listAll().subscribe(data => {
      this.dataSource.data = data;

    })
  }

  remover(ingressoDTO:IngressoDto) {
    console.log("Removido", ingressoDTO.idCodigo);
    this.ingressoService.remover({id: ingressoDTO.idCodigo || 0})
      .subscribe(retorno =>{
        this.buscarDados();
        this.showMensagemSimples("Excluído com sucesso !");
        console.log("Exclusão", retorno);
      }, error =>{
        if (error.status === 404) {
          this.showMensagemSimples("Ingresso cadastrado não existe mais!!");
        } else {
          this.showMensagemSimples("Erro ao excluir");
          console.log("Erro:", error);
        }
      })
  }

  confirmarExcluir(ingressoDto: IngressoDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Confirmar?',
        mensagem: `A exclusão de ${ingressoDto.nomeCliente} ${ingressoDto.assentoSala} (ID: ${ingressoDto.idCodigo})?`,
        textoBotoes: {
          ok: 'Confirmar',
          cancel: 'Cancelar',
        },
        dado: ingressoDto
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.remover(confirmed.dado);
      }
    });
  }

  showMensagemSimples( mensagem: string, duracao: number = 4000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

