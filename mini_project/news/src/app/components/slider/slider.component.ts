import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service'
import { News } from 'src/app/models/news'




@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  latestNews : News[]
  news:News[]


  constructor(  private slider: SliderService) { }

  ngOnInit(): void {

    this.slider.getTopNews().subscribe((data: News[]) => {
      this.latestNews = data
      
    })

    this.slider.getNews().subscribe((data: News[]) => {
      this.news = data
      
    })

  }
  

  images = [  { img: "../assets/images/1.jpg" },  
  { img: "../assets/images/2.jpg" },  
  { img: "../assets/images/3.jpg" }
  
  ];  
  
 

  
}  


