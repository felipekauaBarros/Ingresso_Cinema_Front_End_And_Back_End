package br.ueg.prog.web.ingressocinema.mapper;

import br.ueg.prog.web.ingressocinema.dto.IngressoDTO;
import br.ueg.prog.web.ingressocinema.model.CadastroIngresso;
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
public class IngressoMapperImpl implements IngressoMapper {

    @Override
    public CadastroIngresso toModelo(IngressoDTO dto) {
        if ( dto == null ) {
            return null;
        }

        CadastroIngresso cadastroIngresso = new CadastroIngresso();

        cadastroIngresso.setIdCodigo( dto.getIdCodigo() );
        cadastroIngresso.setNomeEvento( dto.getNomeEvento() );
        cadastroIngresso.setLoCal( dto.getLoCal() );
        cadastroIngresso.setDescricaoIngresso( dto.getDescricaoIngresso() );
        cadastroIngresso.setDataIngresso( dto.getDataIngresso() );
        cadastroIngresso.setTipoIngresso( dto.getTipoIngresso() );
        cadastroIngresso.setQuantidadeIngresso( dto.getQuantidadeIngresso() );
        cadastroIngresso.setValorIngresso( dto.getValorIngresso() );
        cadastroIngresso.setQuantidadeCompra( dto.getQuantidadeCompra() );
        cadastroIngresso.setValorTotal( dto.getValorTotal() );

        return cadastroIngresso;
    }

    @Override
    public IngressoDTO toDTO(CadastroIngresso modelo) {
        if ( modelo == null ) {
            return null;
        }

        IngressoDTO ingressoDTO = new IngressoDTO();

        ingressoDTO.setIdCodigo( modelo.getIdCodigo() );
        ingressoDTO.setNomeEvento( modelo.getNomeEvento() );
        ingressoDTO.setLoCal( modelo.getLoCal() );
        ingressoDTO.setDescricaoIngresso( modelo.getDescricaoIngresso() );
        ingressoDTO.setDataIngresso( modelo.getDataIngresso() );
        ingressoDTO.setTipoIngresso( modelo.getTipoIngresso() );
        ingressoDTO.setQuantidadeIngresso( modelo.getQuantidadeIngresso() );
        ingressoDTO.setValorIngresso( modelo.getValorIngresso() );
        ingressoDTO.setQuantidadeCompra( modelo.getQuantidadeCompra() );
        ingressoDTO.setValorTotal( modelo.getValorTotal() );

        return ingressoDTO;
    }

    @Override
    public List<IngressoDTO> toDTO(List<CadastroIngresso> lista) {
        if ( lista == null ) {
            return null;
        }

        List<IngressoDTO> list = new ArrayList<IngressoDTO>( lista.size() );
        for ( CadastroIngresso cadastroIngresso : lista ) {
            list.add( toDTO( cadastroIngresso ) );
        }

        return list;
    }
}
