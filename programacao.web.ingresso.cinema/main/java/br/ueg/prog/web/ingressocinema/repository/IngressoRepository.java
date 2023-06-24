package br.ueg.prog.web.ingressocinema.repository;

import br.ueg.prog.web.ingressocinema.model.CadastroIngresso;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface IngressoRepository extends JpaRepository<CadastroIngresso, Long> {
    Optional<CadastroIngresso> findCadastroIngressoByidCodigo(Long idCodigo);

    @Query(value = "select count(i) from CadastroIngresso i where i.idCodigo = :IdExists")
    Integer countId(Long IdExists);
}
