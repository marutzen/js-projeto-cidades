package com.sistema.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.model.Cidade;
import com.sistema.repository.CidadeRepository;

@Service
@Transactional
public class CidadeService {

	@Autowired
	private CidadeRepository repository;

	public Iterable<Cidade> findAll() {
		return repository.findAll();
	}

	public Optional<Cidade> find(Long id) {
		return repository.findById(id);
	}

	public Cidade save(Cidade Cidade) {
		return repository.save(Cidade);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}

}
