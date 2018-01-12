import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherService } from './weather.service';
import { ForecastComponent } from './forecast/forecast.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyDataService} from './spotify-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TemperatureComponent,
    ForecastComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    SpotifyDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
