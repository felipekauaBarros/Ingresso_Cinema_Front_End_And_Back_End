package br.ueg.prog.web.ingressocinema.controller;

import br.ueg.prog.web.api.controller.CrudController;
import br.ueg.prog.web.ingressocinema.dto.compraIngressoDTO;
import br.ueg.prog.web.ingressocinema.mapper.CompraIngressoMapper;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import br.ueg.prog.web.ingressocinema.service.ComprarIngressoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "${app.api.base}/comprar")
public class CompraIngressoController extends CrudController
        <ComprarIngresso, compraIngressoDTO,Long, CompraIngressoMapper, ComprarIngressoService> {
}
