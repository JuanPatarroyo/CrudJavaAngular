import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from './../person-service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  id: number;
  inputName: string;
  surname: string;
  email: string;
  phone: number;

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) {
    this.inputName = '';
    this.id = 0;
    this.surname = '';
    this.email = '';
    this.phone = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null) {
      const person = this.personService.findPerson(this.id);
      if (person != null) {
        this.inputName = person.name;
      }
    }
  }

  onSavePerson() {
    const personToAdd = new Person(this.id, this.inputName, this.surname, this.email, this.phone);
    if (this.id != null) {
      this.personService.updatePerson(this.id, personToAdd);
    } else {
      this.personService.addPerson(personToAdd);
    }
    this.router.navigate(['people']);
  }

  deletePerson() {
    if (this.id != null) {
      this.personService.deletePerson(this.id);
    }
    this.router.navigate(['people']);
  }
}
