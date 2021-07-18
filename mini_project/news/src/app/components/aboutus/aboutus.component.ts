import { Component, OnInit } from '@angular/core';
import {GoogleMapsModule} from '@angular/google-maps'
import {AboutusService} from  'src/app/services/aboutus.service'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  
})
export class AboutusComponent implements OnInit {
 
  marker={}
  info={}
  title:String
  values:String
  history:String
  learnmore:String
  position={
    lat:0,
    lng:0
  }
label={
 color:'',
 text:''
}
  
//toggle functionality variables
public show:boolean = false;

toggle(){
  this.show= !this.show
}


  constructor(private aboutservice: AboutusService) { }

  ngOnInit(): void {

  this.getLocationData()    
  }

 getLocationData(){
   this.aboutservice.getLocation().subscribe((datac)=>{
     console.log(datac)

    let data=JSON.parse(datac)
      this.position.lat=data.lat
      this.position.lng=data.lng
    
      this.label.color=''+data.label.color
      this.label.text=''+data.label.text
      this.title=data.title
      
      this.values=data.values
      this.history=data.history
      this.learnmore=data.learnmore

      // console.log('new label:---------'+this.label.color)
    })
 } 
   



}




