import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationDialog} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IngressoDto} from "../../../api/models/ingresso-dto";
import {IngressoControllerService} from "../../../api/services/ingresso-controller.service";

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
  id!: number;
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
        nomeEvento: [null, Validators.required],
        loCal: [null, Validators.required],
        descricaoIngresso: [null, Validators.required],
        dataIngresso: [null],
        tipoIngresso: [null, Validators.required],
        valorIngresso: [null, Validators.required],
        quantidadeIngresso: [null, Validators.required]
      });
    }

  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.id) {
        this.realizarincluzao();
      } else {
        this.alteracao();
      }
    }
  }

  private realizarincluzao() {
    console.log("Dados:", this.formGroup.value);
    this.ingressoService.incluir({body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.router.navigate(["/ingresso"]);
      }, erro => {
        console.log("Erro:", +erro);
        alert("Erro ao incluir");
      })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarAcao(ingressoDto: IngressoDto, acao: string) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Mensagem!?',
        mensagem: `Ação de  ${acao} dados ${ingressoDto.descricaoIngresso} (ID: ${ingressoDto.idCodigo}) realizada com sucesso !!?`,
        textoBotoes: {
          ok: 'Ok',
        },
      },
    });
  }

  private prepararEdicao() {
    const paramid = this.route.snapshot.paramMap.get('idCodigo');
    if(paramid) {
      const id = parseInt(paramid);
      console.log("id", paramid);
      this.ingressoService.obterPorId({id: id})
        .subscribe(retorno =>
      {
        this.acao = this.ACAO_EDITAR;
        console.log("retorno", retorno);
        this.id = retorno.idCodigo || 0;
        this.formGroup.patchValue(retorno);
      })
    }
  }

  private alteracao() {
    console.log("Dados:", this.formGroup.value);
    this.ingressoService.alterar({id: this.id as number, body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_EDITAR);
        this.router.navigate(["/ingresso"]);
      }, erro => {
        console.log("Erro:", +erro.error);
        //alert("Erro ao incluir");
      })
  }
}
