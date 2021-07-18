import { Component, OnInit } from '@angular/core';

import {SportsService} from 'src/app/services/sports.service'
import {Sports} from 'src/app/models/Sports'


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})

export class SportsComponent implements OnInit {

sports=[]
displaySport=[]


  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.getSportsNews()
    this.displaySport=this.sports
    console.log(this.displaySport)
  }

getSportsNews(){
  this.sportsService.getSportsNews().subscribe(data=>{
 
    let keys=Object.keys(data)

    for(let ele in keys){
      this.sports.push(data[ele])
    }
    
  })
}

timeString()
{



}
}
