import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecastOne:any;
  forecastTwo:any;
  forecastThree:any;
  forecastFor:any;
  forecastFive:any;
  forecastSix:any;

  day:any;
  one:any;
  two:any;
  three:any;
  for:any;
  five:any;
  six:any;
  
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    //////firt run
    this._weatherService.getForecast().subscribe(
      response => {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] =  "Sonntag";
        weekday[1] = "Montag";
        weekday[2] = "Dienstag";
        weekday[3] = "Mittwoch";
        weekday[4] = "Donnerstag";
        weekday[5] = "Freitag";
        weekday[6] = "Samstag";

        this.day=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.one=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.two=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.three=weekday[d.getDay()];
        /*d.setDate(d.getDate() + 1);
        this.for=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.five=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.six=weekday[d.getDay()];*/
                        
        //console.log(response);
        this.forecastOne=(response.list[0].main.temp) - 273.15;
        this.forecastOne=this.forecastOne.toFixed(1);
        this.forecastTwo=(response.list[1].main.temp) - 273.15;
        this.forecastTwo=this.forecastTwo.toFixed(1);
        this.forecastThree=(response.list[2].main.temp) - 273.15;
        this.forecastThree=this.forecastThree.toFixed(1);
      /* this.forecastFor=(response.list[3].main.temp) - 273.15;
        this.forecastFor=this.forecastFor.toFixed(1);
        this.forecastFive=(response.list[4].main.temp) - 273.15;
        this.forecastFive=this.forecastFive.toFixed(1);
        this.forecastSix=(response.list[5].main.temp) - 273.15;
        this.forecastSix=this.forecastSix.toFixed(1);*/
      }
    )

    //////after ten minutes epilepsed
    let timeoutId = setInterval(() => {
     this._weatherService.getForecast().subscribe(
        response => {
          var d = new Date();
        var weekday = new Array(7);
        weekday[0] =  "Sonntag";
        weekday[1] = "Montag";
        weekday[2] = "Dienstag";
        weekday[3] = "Mittwoch";
        weekday[4] = "Donnerstag";
        weekday[5] = "Freitag";
        weekday[6] = "Samstag";

        this.day=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.one=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.two=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.three=weekday[d.getDay()];
      /*d.setDate(d.getDate() + 1);
        this.for=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.five=weekday[d.getDay()];
        d.setDate(d.getDate() + 1);
        this.six=weekday[d.getDay()];*/
                        
        //console.log(response);
        this.forecastOne=(response.list[0].main.temp) - 273.15;
        this.forecastOne=this.forecastOne.toFixed(1);
        this.forecastTwo=(response.list[1].main.temp) - 273.15;
        this.forecastTwo=this.forecastTwo.toFixed(1);
        this.forecastThree=(response.list[2].main.temp) - 273.15;
        this.forecastThree=this.forecastThree.toFixed(1);
     /* this.forecastFor=(response.list[3].main.temp) - 273.15;
        this.forecastFor=this.forecastFor.toFixed(1);
        this.forecastFive=(response.list[4].main.temp) - 273.15;
        this.forecastFive=this.forecastFive.toFixed(1);
        this.forecastSix=(response.list[5].main.temp) - 273.15;
        this.forecastSix=this.forecastSix.toFixed(1);*/
        }
      )
    }, 43200000);
  }
}
