/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.data;

import co.com.domain.Persona;
import java.util.List;

/**
 *
 * @author jpatarroyo
 */
public interface PersonDao {

    public List<Persona> findAllPeople();

    public Persona findPerson(Persona person);

    public void insert(Persona person);

    public void update(Persona person);

    public void delete(Persona person);
}
