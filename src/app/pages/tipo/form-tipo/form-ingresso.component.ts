import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";
import {IngressoControllerService} from "../../../api/services/ingresso-controller.service";
import {IngressoDto} from "../../../api/models/ingresso-dto";
import {ConfirmationDialog} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-ingresso.component.html',
  styleUrls: ['./form-ingresso.component.scss']
})
export class FormIngressoComponent {
  formGroup!: FormGroup;
  public readonly ACAO_INCLUIR = "Incluir";
  public readonly ACAO_EDITAR ="Editar";
  acao: string= this.ACAO_INCLUIR;
  idCodigo!: number;
  constructor(
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    public ingressoService: IngressoControllerService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){
      this.createForm();
      this._adapter.setLocale('pt-br');
      this.prepararEdicao();
  }
  //dependecia
  createForm() {
    this.formGroup = this.formBuilder.group({
      nomeCliente: [null, Validators.required],
      nomeFilme: [null, Validators.required],
      salaFilme: [null, Validators.required],
      assentoSala: [null, Validators.required],
      dataFilme: [null, Validators.required],
      categoriaFilme: [null, Validators.required],
      tipoIngresso: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log("Dados:", this.formGroup.value);
      this.ingressoService.incluir({body: this.formGroup.value})
        .subscribe(retorno =>{
          console.log("Retorno:", retorno);
          this.confirmarInclusao(retorno);
          this.router.navigate(["/ingresso"]);
      }, erro => {
          console.log("Erro:", +erro);
          alert("Erro ao incluir");
      })
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarInclusao(ingressoDto: IngressoDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Mensagem!?',
        mensagem: `A inclusão de de ${ingressoDto.nomeCliente} (ID: ${ingressoDto.idCodigo}) realizada com sucesso !!?`,
        textoBotoes: {
          ok: 'Ok',
        },
      },
    });
  }

  private prepararEdicao() {
    const paramId = this.route.snapshot.paramMap.get('codigo');
    if(paramId) {
      const codigo = parseInt(paramId);
      console.log("codigo", paramId);
      this.ingressoService.obterPorId({id: codigo})
        .subscribe(retorno =>
      {
        this.acao = this.ACAO_EDITAR;
        console.log("retorno", retorno);
        //this.idCodigo = retorno.idCodigo;
        this.formGroup.patchValue(retorno);
      })
    }
  }
}
