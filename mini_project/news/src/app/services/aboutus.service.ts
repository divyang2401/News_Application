import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const apiURL='http://localhost:3000/aboutus'

@Injectable({
  providedIn: 'root'
})
export class AboutusService {

  constructor(private http: HttpClient) { }


 getLocation():Observable<any>{
    return this.http.get(apiURL)
 } 


}
