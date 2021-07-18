import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NewsService } from 'src/app/services/news.service'

import {News} from 'src/app/models/news'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  news: News[]
  ids : string ='';

  constructor(
    private getNews: NewsService
    
  ) { }

  ngOnInit(): void {
    this.getNews.getUsersList().subscribe((data: News[]) => {
      this.news = data
      
    },
    (err) => {
      console.log("Err")
    })
  }
  editNews(id) {
    this.ids = id;
  }

  updateNews(update) {
    this.getNews.updateNewsData(update).subscribe(
      (data) => {
       
      },
      (err) => {
        console.log("Err")
      }
    )
    this.ids = '';
  }

  removeNews(news) {
    if(window.confirm('The data will be lost')) {
        this.getNews.deleteNews(news._id).subscribe((data) => {
          this.news.splice(1);
        }
      )    
    }
    location.reload()
  }



}
  


