import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from './../person-service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  @Input() person: Person | null = new Input();

  id: number = 0;
  inputName: string = '';
  surname: string = '';
  lastSurname: string = '';
  email: string = '';
  phone: number = 0;
  actionSelected: string = 'New';

  constructor(private personService: PersonService, private router: Router,
    private route: ActivatedRoute, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.actionSelected = this.person?.id == null ? 'New' : 'Edit';
    if (this.person != null) {
      this.inputName = this.person.name;
      this.id = this.person.id;
      this.surname = this.person.surname;
      this.lastSurname = this.person.lastSurname;
      this.email = this.person.email;
      this.phone = this.person.phone;
    }
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  }

  onSavePerson() {
    const personToAdd = new Person(this.id, this.inputName, this.surname, this.lastSurname, this.email, this.phone);
    if (this.person?.id != null) {
      this.personService.updatePerson(this.id, personToAdd);
    } else {
      this.personService.addPerson(personToAdd);
    }
    this.router.navigate(['people']);
    this.modalService.dismissAll();
  }

  deletePerson() {
    if (this.person?.id != null) {
      this.personService.deletePerson(this.person.id);
    }
    this.router.navigate(['people']);
  }

  open(content: any) {
    console.log("Person found: ", this.person);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
