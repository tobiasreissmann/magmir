import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {
  
  constructor(private http: Http) { }

  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=6551127&APPID=b2bc6dd7ee9d1fcee29ee3ee62e233a8').map( res => res.json());
  };

  getForecast() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=6551127&APPID=b2bc6dd7ee9d1fcee29ee3ee62e233a8').map( res => res.json());
  }

  getIcon(id) {
    return this.http.get('http://openweathermap.org/img/w/'+'id'+'.png')
  }

}
