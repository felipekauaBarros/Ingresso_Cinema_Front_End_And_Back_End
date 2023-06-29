package br.ueg.prog.web.ingressocinema.repository;

import br.ueg.prog.web.ingressocinema.model.cadastroIngresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface IngressoRepository extends JpaRepository<cadastroIngresso, Long> {

    Optional<cadastroIngresso> findCadastroIngressoByidCodigo(Long idCodigo);

    @Query(value = "select count(i) from cadastroIngresso i where i.idCodigo = :IdExists")
    Integer countId (Long IdExists);
}
