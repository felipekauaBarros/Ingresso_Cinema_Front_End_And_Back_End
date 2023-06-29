package br.ueg.prog.web.ingressocinema.controller;

import br.ueg.prog.web.api.controller.CrudController;
import br.ueg.prog.web.ingressocinema.mapper.ingressoMapper;
import br.ueg.prog.web.ingressocinema.model.cadastroIngresso;
import br.ueg.prog.web.ingressocinema.service.ingressoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "${app.api.base}/ingresso")

public class IngressoController extends CrudController
        <cadastroIngresso, ingressoDTO,Long, ingressoMapper, ingressoService>  {
}

