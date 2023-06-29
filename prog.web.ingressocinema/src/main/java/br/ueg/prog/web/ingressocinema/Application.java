package br.ueg.prog.web.ingressocinema;

import br.ueg.prog.web.ingressocinema.model.CadastroIngresso;
import br.ueg.prog.web.ingressocinema.model.ComprarIngresso;
import br.ueg.prog.web.ingressocinema.repository.IngressoRepository;
import br.ueg.prog.web.ingressocinema.repository.CompraIngressoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean //objeto que faz qualquer coisa
	public CommandLineRunner commandLineRunner(IngressoRepository ingressoRepository, CompraIngressoRepository compraingressoRepository) {
		return args -> {
			System.out.println("Executado");
			System.out.println(ingressoRepository);
			CadastroIngresso ingresso = new CadastroIngresso();
			CadastroIngresso ingresso1 = new CadastroIngresso();
			ingresso.setIdCodigo(1L);
			ingresso.setNomeEvento("Cinema");
			ingresso.setLoCal("Sala 05");
			ingresso.setDescricaoIngresso("Panico");
			LocalDate lanca = LocalDate.of(2023, 05, 25);
			ingresso.setDataIngresso(lanca);
			ingresso.setTipoIngresso("Meia");
			ingresso.setValorIngresso(18.55);
			ingresso.setQuantidadeIngresso(7);

			ingresso1.setIdCodigo(2L);
			ingresso1.setNomeEvento("Show");
			ingresso1.setLoCal("Nobel");
			ingresso1.setDescricaoIngresso("Cantor Daniel");
			LocalDate lanca1 = LocalDate.of(2023, 06, 17);
			ingresso1.setDataIngresso(lanca1);
			ingresso1.setTipoIngresso("Inteira");
			ingresso1.setValorIngresso(150.00);
			ingresso1.setQuantidadeIngresso(1000);
			Optional<CadastroIngresso> ingressoById = ingressoRepository.findCadastroIngressoByidCodigo(ingresso.getIdCodigo());
			Integer idCount = ingressoRepository.countId(ingresso.getIdCodigo());
			if(idCount>0) {
				System.out.println("Ingresso nao existe");
			}
			if(ingressoById.isPresent()){
				CadastroIngresso ingressoCliente = ingressoById.get();
				System.out.println("Ingresso pertence: "+ingressoCliente.getNomeEvento());
			}else {
				ingressoRepository.save(ingresso);
			}
			try{
				ingressoRepository.save(ingresso);
				ingressoRepository.save(ingresso1);
				System.out.println(ingresso);
				System.out.println(ingresso1);
			}catch (Exception e) {
				e.printStackTrace();
			}
			System.out.println("Executado");
			System.out.println(compraingressoRepository);

			ComprarIngresso comprarIngresso = new ComprarIngresso();
			comprarIngresso.setIdcompraIngresso(1L);


			try{
				compraingressoRepository.save(comprarIngresso);
				System.out.println(comprarIngresso);
			}catch (Exception e) {
				e.printStackTrace();
			}

		};
	}

	private static void imprimir_Lista(IngressoRepository ingresso_repository) {
		List<CadastroIngresso> lista = ingresso_repository.findAll();
		lista.forEach(item ->{
			System.out.println("Ingressos: " +item);
		});
	}

}
