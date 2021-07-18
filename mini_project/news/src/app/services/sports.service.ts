import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import{HttpClient} from '@angular/common/http'
import {Sports} from 'src/app/models/Sports'


const sportsApi='http://localhost:3000/sportnews'

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http:HttpClient) { }

  
  getSportsNews(): Observable<Sports>{
    return this.http.get<Sports>(sportsApi)
}


}
