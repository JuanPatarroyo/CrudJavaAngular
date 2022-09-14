import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}
}
