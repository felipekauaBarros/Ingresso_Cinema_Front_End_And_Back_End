package br.ueg.prog.web.ingressocinema.repository;

import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraIngressoRepository extends JpaRepository<ComprarIngresso, Long> {
}
