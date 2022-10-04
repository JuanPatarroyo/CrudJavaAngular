import { Observable } from 'rxjs';
import { DataService } from './data-service';
import { Injectable } from "@angular/core";
import { Person } from './person.model';

@Injectable()
export class PersonService {
  people: Person[] = [];

  constructor(private dataService: DataService) { }

  setPeople(people: Person[]) {
    this.people = people;
  }

  addPerson(person: Person) {
    this.dataService.addPerson(person)
      .subscribe({
        next: (person: Person) => {
          this.people.push(person);
        }
      });
  }

  findPeople() {
    return this.dataService.getPeople();
  }

  findPerson(id: number) {
    const person: Person | undefined = this.people.find(person => person.id == id);
    console.log("person finded is: " + person?.id + " name " + person?.name);
    return person;
  }

  updatePerson(id: number, person: Person) {
    const personModified = this.people.find(person => person.id == id);
    if (personModified != null) {
      personModified.id = person.id;
      personModified.name = person.name;
      personModified.lastSurname = person.lastSurname;
      personModified.surname = person.surname;
      personModified.email = person.email;
      personModified.phone = person.phone;
    }
    this.dataService.updatePerson(id, person);
  }

  deletePerson(id: number) {
    console.log("Person to delete is: " + id);
    const index = this.people.findIndex(person => person.id == id);
    this.people.splice(index, 1);
    this.dataService.deletePerson(id);
  }
}
