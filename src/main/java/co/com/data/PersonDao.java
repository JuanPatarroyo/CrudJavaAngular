/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.data;

import co.com.domain.Person;
import java.util.List;

/**
 *
 * @author jpatarroyo
 */
public interface PersonDao {

    public List<Person> findAllPeople();

    public Person findPerson(Person person);

    public void insert(Person person);

    public void update(Person person);

    public void delete(Person person);
}
