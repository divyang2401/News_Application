import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const loginUrl = 'http://localhost:3000/admin/login'
const registerUrl = 'http://localhost:3000/admin/register'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(creds: any): Observable<any> {
    return this.http.post(loginUrl, creds).pipe(map((user) => {
      localStorage.setItem('user', JSON.stringify(user))
      return user
    }))
  }

    register(creds: any): Observable<any> {
      return this.http.post(registerUrl, creds).pipe(map((user) => {
        
        return user
      }))
    }

    getUserDetails() {
      return JSON.parse(localStorage.getItem('user'))
    }

    logout() {
      localStorage.removeItem('user')
    }
}
