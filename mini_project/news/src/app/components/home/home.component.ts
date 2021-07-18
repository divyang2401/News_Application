import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherForm: FormGroup;
  weather: any = <any>{};
  city : string;


  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder) { }

    getCity(): string {
      return this.weatherForm.get('city').value;
    }
  ngOnInit(): void {
    this.weatherForm = this.formBuilder.group({
      city: ['Missouri']
    });

    this.city = this.getCity();
    console.log('City: ' + this.city)
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weather = data 
      console.log(this.weather)
    });
  }

  handleSubmit(loc: string){
    loc = this.getCity();
    console.log('loc: ' + loc)
    this.weatherService.getWeather(loc).subscribe((data) => {
      this.weather = data 
      console.log(this.weather)
    });
  }


}
