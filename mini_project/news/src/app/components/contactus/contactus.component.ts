import { Component, OnInit } from '@angular/core';
import {ContactusService} from 'src/app/services/contactus.service'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

 model: any={}
 
 
  constructor(private contactSer: ContactusService ) { }

  ngOnInit(): void {
  }

handleSubmit(){
  this.sendQuery(this.model)
}

sendQuery(newmodel){
this.contactSer.sendQuery(newmodel).subscribe(()=>{
  
})
}



}
