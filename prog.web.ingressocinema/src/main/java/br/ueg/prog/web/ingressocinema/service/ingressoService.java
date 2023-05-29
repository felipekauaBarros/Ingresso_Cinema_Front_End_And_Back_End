package br.ueg.prog.web.ingressocinema.service;

import br.ueg.prog.web.api.service.CrudService;
import br.ueg.prog.web.ingressocinema.model.cadastroIngresso;

public interface ingressoService extends CrudService<cadastroIngresso, Long> {
    public cadastroIngresso desativar(Long id);
}
