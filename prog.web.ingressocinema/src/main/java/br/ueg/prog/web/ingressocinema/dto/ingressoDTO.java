package br.ueg.prog.web.ingressocinema.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;

public @Data class ingressoDTO {
    private Long idCodigo;
    private String nomeCliente;
    private String salaFilme;
    private String assentoSala;
    private String tipoIngresso;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private LocalDate dataFilme;

    private String categoriaFilme;
    private String nomeFilme;
}
