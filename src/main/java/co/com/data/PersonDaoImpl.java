/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.data;

import co.com.domain.Person;
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
    public List<Person> findAllPeople() {
        return entityManager.createNamedQuery("Person.findAllPeople").getResultList();
    }

    @Override
    public Person findPerson(Person person) {
        return entityManager.find(Person.class, person.getId());
    }

    @Override
    public void insert(Person person) {
        entityManager.persist(person);
        entityManager.flush();
    }

    @Override
    public void update(Person person) {
        entityManager.merge(person);
    }

    @Override
    public void delete(Person person) {
        entityManager.remove(entityManager.merge(person));
    }
    
}
