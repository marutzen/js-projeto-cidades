package com.sistema.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.sistema.model.Cidade;
import com.sistema.service.CidadeService;

@Controller
@RequestMapping(value = "/cidade")
public class CidadeController {

	@Autowired
	private CidadeService service;

	@GetMapping("/")
	public ModelAndView findAll() {

		ModelAndView mv = new ModelAndView("/cidade");
		mv.addObject("cidades", service.findAll());

		return mv;
	}

	@GetMapping("/add")
	public ModelAndView add(Cidade Cidade) {
		ModelAndView mv = new ModelAndView("/cidadeAdd");
		mv.addObject("cidade", Cidade);

		return mv;
	}

	@GetMapping("/edit/{id}")
	public ModelAndView edit(@PathVariable("id") Long id) {
		return add(service.find(id).get());
	}

	@GetMapping("/delete/{id}")
	public ModelAndView delete(@PathVariable("id") Long id) {

		service.delete(id);

		return findAll();
	}

	@PostMapping("/save")
	public ModelAndView save(@Valid Cidade cidade, BindingResult result) {
		if (result.hasErrors()) {
			return add(cidade);
		}

		service.save(cidade);

		return findAll();
	}

}