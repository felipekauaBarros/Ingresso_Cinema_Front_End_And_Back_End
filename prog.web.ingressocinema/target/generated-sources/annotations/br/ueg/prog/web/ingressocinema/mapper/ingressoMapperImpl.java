package br.ueg.prog.web.ingressocinema.mapper;

import br.ueg.prog.web.ingressocinema.dto.ingressoDTO;
import br.ueg.prog.web.ingressocinema.model.cadastroIngresso;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-28T18:20:40-0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 20 (Oracle Corporation)"
)
@Component
public class ingressoMapperImpl implements ingressoMapper {

    @Override
    public cadastroIngresso toModelo(ingressoDTO dto) {
        if ( dto == null ) {
            return null;
        }

        cadastroIngresso cadastroIngresso = new cadastroIngresso();

        cadastroIngresso.setIdCodigo( dto.getIdCodigo() );
        cadastroIngresso.setNomeCliente( dto.getNomeCliente() );
        cadastroIngresso.setSalaFilme( dto.getSalaFilme() );
        cadastroIngresso.setAssentoSala( dto.getAssentoSala() );
        cadastroIngresso.setTipoIngresso( dto.getTipoIngresso() );
        cadastroIngresso.setDataFilme( dto.getDataFilme() );
        cadastroIngresso.setCategoriaFilme( dto.getCategoriaFilme() );
        cadastroIngresso.setNomeFilme( dto.getNomeFilme() );

        return cadastroIngresso;
    }

    @Override
    public ingressoDTO toDTO(cadastroIngresso modelo) {
        if ( modelo == null ) {
            return null;
        }

        ingressoDTO ingressoDTO = new ingressoDTO();

        ingressoDTO.setIdCodigo( modelo.getIdCodigo() );
        ingressoDTO.setNomeCliente( modelo.getNomeCliente() );
        ingressoDTO.setSalaFilme( modelo.getSalaFilme() );
        ingressoDTO.setAssentoSala( modelo.getAssentoSala() );
        ingressoDTO.setTipoIngresso( modelo.getTipoIngresso() );
        ingressoDTO.setDataFilme( modelo.getDataFilme() );
        ingressoDTO.setCategoriaFilme( modelo.getCategoriaFilme() );
        ingressoDTO.setNomeFilme( modelo.getNomeFilme() );

        return ingressoDTO;
    }

    @Override
    public List<ingressoDTO> toDTO(List<cadastroIngresso> lista) {
        if ( lista == null ) {
            return null;
        }

        List<ingressoDTO> list = new ArrayList<ingressoDTO>( lista.size() );
        for ( cadastroIngresso cadastroIngresso : lista ) {
            list.add( toDTO( cadastroIngresso ) );
        }

        return list;
    }
}
