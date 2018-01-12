import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyDataService {

  constructor(private http: Http) { }

  getSpotifyData() {
    return this.http.get('https://api.spotify.com/v1/me/player/currently-playing').map( res => res.json());
  } 
}
