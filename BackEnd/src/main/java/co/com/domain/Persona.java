/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

/**
 *
 * @author jpatarroyo
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "Person.findPeople", query = "SELECT p FROM Persona p ORDER BY p.id")
})
public class Persona implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_persona")
    private int id;
    @Column(name = "nombre")
    private String name;
    @Column(name = "apellido")
    private String surname;
    @Column(name = "segundo_apellido")
    private String lastSurname;
    private String email;
    @Column(name = "telefono")
    private Long phone;
    

    public Persona() {
    }

    public Persona(int id) {
        this.id = id;
    }

    public Persona(int id, String name, String surname, String lastSurname, String email, Long phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.lastSurname = lastSurname;
        this.email = email;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Person{" + "id=" + id + ", name=" + name + ", surname=" + surname + ", lastSurname=" + lastSurname + ", email=" + email + ", phone=" + phone + '}';
    }

}
