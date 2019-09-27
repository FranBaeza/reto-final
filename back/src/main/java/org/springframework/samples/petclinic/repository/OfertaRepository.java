package org.springframework.samples.petclinic.repository;

import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Oferta;

public interface OfertaRepository {

    Oferta findById(int id) throws DataAccessException;

    Collection<Oferta> findAll() throws DataAccessException;
    
    void save(Oferta oferta) throws DataAccessException;
  
	void delete(Oferta oferta) throws DataAccessException;
	
}
