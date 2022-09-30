import { PersonService } from './../person-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: [
  ]
})
export class PeopleComponent implements OnInit {

  people: Person[] = [];
  constructor(private personService: PersonService, private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personService.findPeople()
      .subscribe({
        next: (peopleList: Person[]) => {
          this.people = peopleList;
          this.personService.setPeople(this.people);
          console.log("people: ", this.people);
        },
        error: (error) => {
          console.log("error");
        }
      });
  }

  toAdd() {
    this.router.navigate(['./people/add']);
  }

}
