package br.ueg.prog.web.ingressocinema.service.impl;

import br.ueg.prog.web.api.service.BaseCrudService;
import br.ueg.prog.web.ingressocinema.model.cadastroIngresso;
import br.ueg.prog.web.ingressocinema.repository.*;
import br.ueg.prog.web.ingressocinema.service.ingressoService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class ingressoServiceImpl
    extends BaseCrudService<cadastroIngresso, Long, IngressoRepository>
    implements ingressoService {
    @Override
    protected void prepararParaIncluir(cadastroIngresso entidade) {

    }

    @Override
    protected void validarDados(cadastroIngresso entidade) {

    }

    @Override
    protected void validarCamposObrigatorios(cadastroIngresso entidade) {

    }
    public cadastroIngresso desativar(Long id){
        cadastroIngresso ingresso = this.recuperarEntidadeOuGeraErro(id);
        return ingresso;
    }
}

