package org.springframework.samples.petclinic.repository.jdbc;

import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.repository.OfertaRepository;

public class JdbcOfertaRepositoryImpl implements OfertaRepository {

	@Override
	public Oferta findById(int id) throws DataAccessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Oferta> findAll() throws DataAccessException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Oferta oferta) throws DataAccessException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Oferta oferta) throws DataAccessException {
		// TODO Auto-generated method stub
		
	}

}
