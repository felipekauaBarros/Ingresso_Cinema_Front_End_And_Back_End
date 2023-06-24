package br.ueg.prog.web.ingressocinema.mapper;

import br.ueg.prog.web.api.mapper.BaseMapper;
import br.ueg.prog.web.ingressocinema.dto.IngressoDTO;
import br.ueg.prog.web.ingressocinema.model.CadastroIngresso;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ingressoMapper extends BaseMapper<CadastroIngresso, IngressoDTO> {
}

