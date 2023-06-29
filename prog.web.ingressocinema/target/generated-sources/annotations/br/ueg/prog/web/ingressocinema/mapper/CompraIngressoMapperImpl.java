package br.ueg.prog.web.ingressocinema.mapper;

import br.ueg.prog.web.ingressocinema.dto.compraIngressoDTO;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-28T21:57:03-0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 20 (Oracle Corporation)"
)
@Component
public class CompraIngressoMapperImpl implements CompraIngressoMapper {

    @Override
    public ComprarIngresso toModelo(compraIngressoDTO dto) {
        if ( dto == null ) {
            return null;
        }

        ComprarIngresso comprarIngresso = new ComprarIngresso();

        comprarIngresso.setIdcompraIngresso( dto.getIdcompraIngresso() );

        return comprarIngresso;
    }

    @Override
    public compraIngressoDTO toDTO(ComprarIngresso modelo) {
        if ( modelo == null ) {
            return null;
        }

        compraIngressoDTO compraIngressoDTO = new compraIngressoDTO();

        compraIngressoDTO.setIdcompraIngresso( modelo.getIdcompraIngresso() );

        return compraIngressoDTO;
    }

    @Override
    public List<compraIngressoDTO> toDTO(List<ComprarIngresso> lista) {
        if ( lista == null ) {
            return null;
        }

        List<compraIngressoDTO> list = new ArrayList<compraIngressoDTO>( lista.size() );
        for ( ComprarIngresso comprarIngresso : lista ) {
            list.add( toDTO( comprarIngresso ) );
        }

        return list;
    }
}
