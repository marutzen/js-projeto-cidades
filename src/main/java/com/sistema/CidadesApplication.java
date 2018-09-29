package com.sistema;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class CidadesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CidadesApplication.class, args);
	}
}
