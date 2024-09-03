import { Component, OnInit } from '@angular/core';
import { APIService }
     from 'src/app/services/api.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: any = '';
  country: any = '';
  weather: any = null;
  
  constructor(private _weatherService: APIService) { }

  ngOnInit(): void {
  }

  getDate(str: string) {
    return str.split(' ')[0];
  }
  
  getTime(str: string) {
    return str.split(' ')[1];
  }
  
  displayWeather() {
    this._weatherService
  .getWeather( this.city, this.country )
  .subscribe(
      (data: any) => (this.weather = data),
      (err: any) => console.log(err)
  );
     
  }



}
