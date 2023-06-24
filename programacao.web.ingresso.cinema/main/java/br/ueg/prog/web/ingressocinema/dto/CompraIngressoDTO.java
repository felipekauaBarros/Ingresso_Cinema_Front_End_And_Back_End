package br.ueg.prog.web.ingressocinema.dto;

import lombok.*;

@Setter
@Getter

public @Data class CompraIngressoDTO {
    private Long idcompraIngresso;
    private Double valorTotalCarrinho;
}
