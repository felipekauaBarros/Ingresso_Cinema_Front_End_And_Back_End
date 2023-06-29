package br.ueg.prog.web.ingressocinema.model;

import br.ueg.prog.web.api.model.IEntidade;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Data
@Entity
@Getter
@Setter
@Table(name = CadastroIngresso.NOME_TABELA)
public class CadastroIngresso implements IEntidade<Long> {

    public static final String NOME_TABELA = "cadastro_ingresso";
    @SequenceGenerator(
            name="ingresso_sequence",
            sequenceName = "ingresso_sequence",
            allocationSize = 1
    )

    public static final class COLUNA{
        public static final String id = "IdCodigo";
    }
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "ingresso_sequence"
    )
    @Id
    @Column(name = COLUNA.id)
    private Long idCodigo;

    @Column(name = "nome_do_evento", length = 100, nullable = false)
    private String nomeEvento;

    @Column(name = "local", length = 100, nullable = false)
    private String loCal;

    @Column(name = "descricao_do_evento", length = 200, nullable = false)
    private String descricaoIngresso;

    @Column(name = "data-ingresso", length = 20)
    private LocalDate dataIngresso;

    @Column(name = "tipo_do_ingresso", length = 10, nullable = false)
    private String tipoIngresso;

    @Column(name = "quantidade-ingresso")
    private Integer quantidadeIngresso;

    @Column(name = "valor-do-ingresso", length = 20, nullable = false)
    private Double valorIngresso;

    @Column(name = "quantidade-compra")
    private Integer quantidadeCompra;

    @Column(name = "valor-total")
    private Double valorTotal;

    @Override
    public String getTabelaNome() {
        return NOME_TABELA;
    }

    @Override
    public Long getId() {
        return idCodigo;

    }

    @Override
    public void setId(Long id) {
        this.idCodigo = id;
    }
}