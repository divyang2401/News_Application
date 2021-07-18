import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AdminService } from 'src/app/services/admin.service'
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  constructor(private admin: AdminService,
    private router: Router) {
    
   }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.admin.login(this.model)
      .subscribe(() => {
        this.router.navigate(['/addNews'])
      }, (err) => {
        console.log(err)
      })
  }

  handleRegisterSubmit() {
    this.admin.register(this.model)
      .subscribe(() => {
        this.router.navigate(['/'])
      }, (err) => {
        console.log(err)
      })
  }
}
