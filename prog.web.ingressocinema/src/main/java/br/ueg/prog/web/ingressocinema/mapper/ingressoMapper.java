package br.ueg.prog.web.ingressocinema.mapper;

import br.ueg.prog.web.api.mapper.BaseMapper;
import br.ueg.prog.web.ingressocinema.dto.*;
import br.ueg.prog.web.ingressocinema.model.cadastroIngresso;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ingressoMapper extends BaseMapper<cadastroIngresso, ingressoDTO> {
}

