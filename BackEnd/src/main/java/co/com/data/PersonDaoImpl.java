/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.data;

import co.com.domain.Persona;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author jpatarroyo
 */
@Stateless
public class PersonDaoImpl implements PersonDao{

    @PersistenceContext(unitName = "PersonPU")
    EntityManager entityManager;
    
    @Override
    public List<Persona> findAllPeople() {
        return entityManager.createNamedQuery("Person.findPeople").getResultList();
    }

    @Override
    public Persona findPerson(Persona person) {
        return entityManager.find(Persona.class, person.getId());
    }

    @Override
    public void insert(Persona person) {
        entityManager.persist(person);
        entityManager.flush();
    }

    @Override
    public void update(Persona person) {
        entityManager.merge(person);
    }

    @Override
    public void delete(Persona person) {
        entityManager.remove(entityManager.merge(person));
    }
    
}
