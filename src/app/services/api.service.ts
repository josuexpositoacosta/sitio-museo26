import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly apiKey: string =  "hj"; // <your API key>;

  constructor(private _http: HttpClient) { } 

  getWeather(city: string, country: string): any {
    const apiUrl = 
 `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${this.apiKey}`;
    return this._http.get(apiUrl);
  }
   
} 
