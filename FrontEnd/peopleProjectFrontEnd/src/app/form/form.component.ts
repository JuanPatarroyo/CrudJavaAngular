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

  inputName: string;
  id: number;

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) {
    this.inputName = '';
    this.id = 0;
  }

  ngOnInit(): void {
  }

  onSavePerson() {
    const personToAdd = new Person(this.id, this.inputName);
    this.personService.addPerson(personToAdd);
    this.router.navigate(['people']);
  }
}
