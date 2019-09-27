package org.springframework.samples.petclinic.repository.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.context.annotation.Profile;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.repository.OfertaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class JpaOfertaRepositoryImpl implements OfertaRepository {

	@PersistenceContext
    private EntityManager em;
	
	@Override
	public Oferta findById(int id) throws DataAccessException {
		Query query = this.em.createQuery("SELECT o FROM ofertas WHERE o.id LIKE :id");
        return (Oferta) query.getSingleResult();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Oferta> findAll() throws DataAccessException {
		Query query = this.em.createQuery("SELECT * FROM ofertas");
		return query.getResultList();
	}

	@Override
	public void save(Oferta oferta) throws DataAccessException {
		if (oferta.getId() == null) {
            this.em.persist(oferta);
        } else {
            this.em.merge(oferta);
        }
		
	}

	@Override
	public void delete(Oferta oferta) throws DataAccessException {
		this.em.remove(this.em.contains(oferta) ? oferta:this.em.merge(oferta));
		
	}

}
