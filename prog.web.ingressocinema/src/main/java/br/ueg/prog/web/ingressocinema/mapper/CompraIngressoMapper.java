package br.ueg.prog.web.ingressocinema.mapper;

import br.ueg.prog.web.api.mapper.BaseMapper;
import br.ueg.prog.web.ingressocinema.dto.compraIngressoDTO;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompraIngressoMapper extends BaseMapper<ComprarIngresso, compraIngressoDTO> {
}
