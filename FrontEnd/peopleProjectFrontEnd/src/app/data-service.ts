import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Person } from "./person.model";
import { Observable } from "rxjs";


@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  urlBase = 'http://localhost:8080/BackEnd/webservice/people';

  getPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.urlBase);
  }

  addPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.urlBase, person);
  }

  updatePerson(id: number, person: Person) {
    let url: string;
    url = this.urlBase + "/" + id;
    this.httpClient.put(url, person).subscribe({
      next: (response) => {
        console.log("response update: " + response);
      },
      error: (error) => {
        console.log("error: " + error);
      }
    });
  }

  deletePerson(id: number) {
    let url: string;
    url = this.urlBase + "/" + id;
    this.httpClient.delete(url).subscribe({
      next: (response) => {
        console.log("response delete: " + response);
      },
      error: (error) => {
        console.log("error delete: " + error);
      }
    });
  }
}
