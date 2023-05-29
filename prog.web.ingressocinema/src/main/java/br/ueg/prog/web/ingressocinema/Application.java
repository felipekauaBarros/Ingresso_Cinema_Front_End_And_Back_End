package br.ueg.prog.web.ingressocinema;

import br.ueg.prog.web.ingressocinema.model.cadastroIngresso;
import br.ueg.prog.web.ingressocinema.repository.IngressoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;


@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean //objeto que faz qualquer coisa
	public CommandLineRunner commandLineRunner(IngressoRepository ingressoRepository) {
		return args -> {
			System.out.println("Executado");
			System.out.println(ingressoRepository);
			cadastroIngresso ingresso = new cadastroIngresso();
			ingresso.setIdCodigo(1L);
			ingresso.setNomeCliente("Felipe kauã");
			ingresso.setSalaFilme("Sala 05");
			ingresso.setAssentoSala("F06");
			ingresso.setTipoIngresso("Meia");
			LocalDate lanca = LocalDate.of(2023, 05, 25);
			ingresso.setDataFilme(lanca);
			ingresso.setCategoriaFilme("Terror");
			ingresso.setNomeFilme("Scream 6");
			Optional<cadastroIngresso> ingressoById = ingressoRepository.findCadastroIngressoByidCodigo(ingresso.getIdCodigo());
			Integer idCount = ingressoRepository.countId(ingresso.getIdCodigo());
			if(idCount>0) {
				System.out.println("Ingresso nao existe");
			}
			if(ingressoById.isPresent()){
				cadastroIngresso ingressoCliente = ingressoById.get();
				System.out.println("Ingresso pertence: "+ingressoCliente.getNomeCliente());
			}else {
				ingressoRepository.save(ingresso);
			}
			try{
				ingressoRepository.save(ingresso);
			}catch (Exception e) {
				e.printStackTrace();
			}
		};
	}

	private static void imprimir_Lista(IngressoRepository ingresso_repository) {
		List<cadastroIngresso> lista = ingresso_repository.findAll();
		lista.forEach(item ->{
			System.out.println("Ingressos: " +item);
		});
	}

}
