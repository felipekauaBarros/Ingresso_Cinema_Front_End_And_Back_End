package br.ueg.prog.web.ingressocinema.model;

import br.ueg.prog.web.api.model.IEntidade;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Data
@Entity
@Table(name = cadastroIngresso.NOME_TABELA)
public class cadastroIngresso implements IEntidade<Long> {

    public static final String NOME_TABELA = "cadastro_ingresso";
    @SequenceGenerator(
            name="ingresso_sequence",
            sequenceName = "ingresso_sequence",
            allocationSize = 1
    )

    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "ingresso_sequence"
    )

    @Id
    @Column(name = "IdCodigo")
    private Long idCodigo;

    @Column(name = "nome_do_cliente", length = 200, nullable = false)
    private String nomeCliente;

    @Column(name = "sala_do_filme", length = 20)
    private String salaFilme;

    @Column(name = "assento_da_sala", length = 6, nullable = false)
private String assentoSala;

    @Column(name = "tipo_do_ingresso", length = 10)
    private String tipoIngresso;

    @Column(name = "data_hora_do_filme", length = 20)
    private LocalDate dataFilme;

    @Column(name = "categoria_do_filme", length = 50)
    private String categoriaFilme;

    @Column(name = "nome_do_filme", length = 200)
    private String nomeFilme;

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
