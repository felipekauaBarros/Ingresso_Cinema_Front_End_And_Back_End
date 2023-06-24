package br.ueg.prog.web.ingressocinema.service.impl;

import br.ueg.prog.web.api.service.BaseCrudService;
import br.ueg.prog.web.ingressocinema.dto.IngressoDTO;
import br.ueg.prog.web.ingressocinema.mapper.ingressoMapper;
import br.ueg.prog.web.ingressocinema.model.CadastroIngresso;
import br.ueg.prog.web.ingressocinema.service.IngressoService;
import br.ueg.prog.web.ingressocinema.repository.IngressoRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class IngressoServiceImpl
    extends BaseCrudService<CadastroIngresso, Long, IngressoRepository>
    implements IngressoService {
    @Override
    protected void prepararParaIncluir(CadastroIngresso entidade) {

    }

    @Override
    protected void validarDados(CadastroIngresso entidade) {

    }

    @Override
    protected void validarCamposObrigatorios(CadastroIngresso entidade) {

    }
    public CadastroIngresso desativar(Long id){
        CadastroIngresso ingresso = this.recuperarEntidadeOuGeraErro(id);
        return ingresso;
    }

    @Autowired
    private IngressoRepository ingressoRepository;

    @Autowired
    private ingressoMapper mapper;

    @PersistenceContext
    private EntityManager entityManager;

    public CadastroIngresso atualizarQuantidadeIngresso(Long ingressoId, int novaQuantidadeIngresso, int novaQuantidadeCompra) {
        CadastroIngresso ingresso = entityManager.find(CadastroIngresso.class, ingressoId);
        ingresso.setQuantidadeIngresso(novaQuantidadeIngresso);
        ingresso.setQuantidadeCompra(novaQuantidadeCompra);
        return ingressoRepository.save(ingresso);
    }




}

