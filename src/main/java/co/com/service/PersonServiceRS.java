/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.service;

import co.com.data.PersonDao;
import co.com.domain.Person;
import java.util.List;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

/**
 *
 * @author jpatarroyo
 */
@Stateless
@Path("/people")
public class PersonServiceRS {

    @Inject
    private PersonDao personDao;

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public List<Person> listPeople() {
        List<Person> people = personDao.findAllPeople();
        System.out.println("people = " + people);
        return people;
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Person getPerson(@PathParam("id") int id) {
        Person person = personDao.findPerson(new Person(id));
        System.out.println("person = " + person);
        return person;
    }

    @POST
    @Consumes(value = MediaType.APPLICATION_JSON)
    @Produces(value = MediaType.APPLICATION_JSON)
    public Person addPerson(Person person) {
        personDao.insert(person);
        System.out.println("Person added: " + person);
        return person;
    }

    @PUT
    @Consumes(value = MediaType.APPLICATION_JSON)
    @Produces(value = MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response updatePerson(@PathParam("id") int id, Person person) {
        Person personToModify = personDao.findPerson(person);
        if (personToModify != null) {
            personDao.update(person);
            System.out.println("Person updated: " + person);
            return Response.ok().entity(person).build();
        }
        return Response.status(Status.NOT_FOUND).build();
    }
    
    @DELETE
    @Produces(value = MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response deletePerson(@PathParam("id") int id){
        personDao.delete(new Person(id));
        System.out.println("Person deleted with id: "+id);
        return Response.ok().build();
    }
}
