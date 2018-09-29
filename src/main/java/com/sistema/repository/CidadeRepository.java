package com.sistema.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sistema.model.Cidade;

@Repository
public interface CidadeRepository extends CrudRepository<Cidade, Long> { }