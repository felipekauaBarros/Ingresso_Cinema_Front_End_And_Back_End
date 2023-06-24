package br.ueg.prog.web.ingressocinema.service;

import br.ueg.prog.web.api.service.CrudService;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;

public interface ComprarIngressoService extends CrudService<ComprarIngresso, Long> {
    public ComprarIngresso desativar(Long idCompra);
}
