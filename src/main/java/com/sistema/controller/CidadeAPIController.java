package com.sistema.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sistema.model.Cidade;
import com.sistema.service.CidadeService;

@Controller
@RequestMapping(value = "/api")
public class CidadeAPIController {

	@Autowired
	private CidadeService service;

	@GetMapping("/buscar")
	@ResponseBody
	public List<Cidade> findAll() {
		return (List<Cidade>) service.findAll();
	}

	@PostMapping("/gravar")
	@ResponseBody
	public Cidade save(@RequestBody Cidade cidade) {
		return service.save(cidade);
	}

	@GetMapping("/excluir/{id}")
	@ResponseBody
	public void delete(@PathVariable("id") Long id) {
		service.delete(id);
	}

}