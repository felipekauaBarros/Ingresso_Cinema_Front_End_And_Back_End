package br.ueg.prog.web.api.model;

public interface IEntidade<PK_TYPE> {
    String getTabelaNome();
    PK_TYPE getId();
    void setId(PK_TYPE id);
}
