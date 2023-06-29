package br.ueg.prog.web.ingressocinema.service;

import br.ueg.prog.web.api.service.CrudService;
import br.ueg.prog.web.ingressocinema.model.CadastroIngresso;

public interface IngressoService extends CrudService<CadastroIngresso, Long> {
    public CadastroIngresso desativar(Long id);
}
