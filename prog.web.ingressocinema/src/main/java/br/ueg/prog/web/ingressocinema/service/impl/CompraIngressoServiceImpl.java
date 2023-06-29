package br.ueg.prog.web.ingressocinema.service.impl;

import br.ueg.prog.web.api.service.BaseCrudService;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import br.ueg.prog.web.ingressocinema.repository.CompraIngressoRepository;
import br.ueg.prog.web.ingressocinema.service.ComprarIngressoService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class CompraIngressoServiceImpl extends BaseCrudService<ComprarIngresso, Long, CompraIngressoRepository>
        implements ComprarIngressoService {
    @Override
    protected void prepararParaIncluir(ComprarIngresso entidade) {

    }

    @Override
    protected void validarDados(ComprarIngresso entidade) {

    }

    @Override
    protected void validarCamposObrigatorios(ComprarIngresso entidade) {

    }
    public ComprarIngresso desativar(Long idCompra){
        ComprarIngresso compraringresso = this.recuperarEntidadeOuGeraErro(idCompra);
        return compraringresso;
    }
}
