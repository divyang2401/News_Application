import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  apiKey: string = 'fbf712a5a83d7305c3cda4ca8fe7ef29';
  apiUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  constructor(private http: HttpClient) { }

  getWeather(city) {
    return this.http.get(this.apiUrl + city + '&mode=json&units=metric&cnt=5&APPID=' + this.apiKey);
  }

}
