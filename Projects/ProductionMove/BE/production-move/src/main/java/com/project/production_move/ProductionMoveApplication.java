package com.project.production_move;

import com.project.production_move.model.ManagementBoard;
import com.project.production_move.repository.ManagementBoardRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ProductionMoveApplication {

	public static void main(String[] args) {
//		SpringApplication.run(ProductionMoveApplication.class, args);

		ApplicationContext context = SpringApplication.run(ProductionMoveApplication.class, args);

//		ManagementBoardRepository managementBoardRepository = context.getBean(ManagementBoardRepository.class);
//		System.out.println(managementBoardRepository.findByCode("BĐH-03"));
	}

}
