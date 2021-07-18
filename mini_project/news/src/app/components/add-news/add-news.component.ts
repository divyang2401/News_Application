import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private newsService: NewsService
    ) { }

  ngOnInit(): void {
    this.newsForm = this.builder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
      imageUrl: ['', Validators.required],
      
    })
  }


  handleSubmit() {
   
    const newNews = {
      title : this.newsForm.value.title,
      description : this.newsForm.value.description, 
      url : this.newsForm.value.articleUrl,
      imageUrl : this.newsForm.value.imageUrl,
    }

    this.newsService.addNewsData(newNews).subscribe(
      (data) => { 
      },
      (err) => {
        console.log("Err")
       }
    )
  }

}

