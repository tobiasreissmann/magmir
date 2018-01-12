import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  currentStats:any;
  currentTemperature:any;
  currentWeather:any;
  iconId:any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    //////firt run
    this._weatherService.getWeather().subscribe(
      response => {
        //console.log(response);
        this.currentStats=response;
        this.currentTemperature=(response.main.temp) - 273.15;
        this.currentWeather=response.weather[0].main;
        this.iconId=response.weather[0].icon;
      }
    )

    //////after ten minutes epilepsed
    let timeoutId = setInterval(() => {
     this._weatherService.getWeather().subscribe(
        response => {
          //console.log(response);
          this.currentStats=response;
          this.currentTemperature=(response.main.temp) - 273.15;
          this.currentWeather=response.weather[0].main;
        }
      )
    }, 600000);
  }
}
