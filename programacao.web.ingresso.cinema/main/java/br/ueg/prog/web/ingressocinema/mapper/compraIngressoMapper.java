package br.ueg.prog.web.ingressocinema.mapper;

import br.ueg.prog.web.api.mapper.BaseMapper;
import br.ueg.prog.web.ingressocinema.dto.CompraIngressoDTO;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface compraIngressoMapper extends BaseMapper<ComprarIngresso, CompraIngressoDTO> {
}
