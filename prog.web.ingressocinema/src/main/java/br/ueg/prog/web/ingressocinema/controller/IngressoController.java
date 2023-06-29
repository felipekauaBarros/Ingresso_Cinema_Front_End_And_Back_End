package br.ueg.prog.web.ingressocinema.controller;

import br.ueg.prog.web.api.controller.CrudController;
import br.ueg.prog.web.ingressocinema.dto.IngressoDTO;
import br.ueg.prog.web.ingressocinema.mapper.IngressoMapper;
import br.ueg.prog.web.ingressocinema.model.CadastroIngresso;
import br.ueg.prog.web.ingressocinema.service.IngressoService;
import br.ueg.prog.web.ingressocinema.service.impl.IngressoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "${app.api.base}/ingresso")

public class IngressoController extends CrudController
        <CadastroIngresso, IngressoDTO,Long, IngressoMapper, IngressoService>  {
    @Autowired
    private IngressoServiceImpl cadastroIngressoService;


    @RequestMapping(path = "${app.api.base}/comprar")
    public ResponseEntity<IngressoDTO> atualizarQuantidadeIngresso(Long ingressoId, int novaQuantidadeIngresso, int novaQuantidadeCompra) {
        CadastroIngresso retorno = cadastroIngressoService.atualizarQuantidadeIngresso(ingressoId, novaQuantidadeIngresso, novaQuantidadeCompra);
        return ResponseEntity.ok(this.mapper.toDTO(retorno));
    }
}

