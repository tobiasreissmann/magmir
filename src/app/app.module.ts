import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherService } from './weather.service';
import { ForecastComponent } from './forecast/forecast.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyDataService} from './spotifyData.service';
import { LitecoinValueComponent } from './litecoin-value/litecoin-value.component';
import { CoinDataService } from './coinData.service';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TemperatureComponent,
    ForecastComponent,
    SpotifyComponent,
    LitecoinValueComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    SpotifyDataService,
    CoinDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
