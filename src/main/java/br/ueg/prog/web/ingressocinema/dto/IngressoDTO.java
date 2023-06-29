package br.ueg.prog.web.ingressocinema.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public @Data class IngressoDTO {
    private Long idCodigo;
    private String nomeEvento;
    private String loCal;
    private String descricaoIngresso;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private LocalDate dataIngresso;

    private String tipoIngresso;
    private Integer quantidadeIngresso;
    private Double valorIngresso;
    private Integer quantidadeCompra;
    private Double valorTotal;
}