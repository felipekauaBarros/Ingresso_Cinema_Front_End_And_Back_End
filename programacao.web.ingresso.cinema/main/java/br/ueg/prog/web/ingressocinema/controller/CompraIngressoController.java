package br.ueg.prog.web.ingressocinema.controller;

import br.ueg.prog.web.api.controller.CrudController;
import br.ueg.prog.web.ingressocinema.dto.CompraIngressoDTO;
import br.ueg.prog.web.ingressocinema.mapper.compraIngressoMapper;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import br.ueg.prog.web.ingressocinema.service.ComprarIngressoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "${app.api.base}/comprar")
public class CompraIngressoController extends CrudController
        <ComprarIngresso, CompraIngressoDTO,Long, compraIngressoMapper, ComprarIngressoService> {

}
