import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const apiURL='http://localhost:3000/contactus'

@Injectable({
  providedIn: 'root'
})
export class ContactusService {


  constructor(private http: HttpClient) { }

sendQuery(model:any): Observable<any>{
  return this.http.post(apiURL, model)
}



}
