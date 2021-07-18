import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public admin: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleLogout() {
    this.admin.logout()
    this.router.navigate(['/'])
  }

}
