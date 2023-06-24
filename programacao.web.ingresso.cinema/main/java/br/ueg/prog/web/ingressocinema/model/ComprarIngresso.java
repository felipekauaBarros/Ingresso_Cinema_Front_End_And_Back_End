package br.ueg.prog.web.ingressocinema.model;

import br.ueg.prog.web.api.model.IEntidade;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Data
@Entity
@Getter
@Setter
@Table(name = ComprarIngresso.NOME_TABELA_COMPRA)
public class ComprarIngresso implements IEntidade<Long> {
    public static final String NOME_TABELA_COMPRA = "comprar-ingresso";

    @SequenceGenerator(
            name="comprar_ingresso_sequence",
            sequenceName = "comprar_ingresso_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "comprar_ingresso_sequence"
    )
    @Id
    @Column(name = "IdIngresso")
    private Long idcompraIngresso;

    @Column(name = "valor-total-carrinho")
    private Double valorTotalCarrinho;

    @Override
    public String getTabelaNome() {
        return NOME_TABELA_COMPRA;
    }

    @Override
    public Long getId() {
        return idcompraIngresso;
    }

    @Override
    public void setId(Long id) {
        this.idcompraIngresso = id;
    }
}
