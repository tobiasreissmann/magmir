import { Component, OnInit } from '@angular/core';
import { SpotifyDataService } from '../spotifyData.service'

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {

  constructor(private _spotifyDataService: SpotifyDataService) { }

  ngOnInit() {
   /* this._spotifyDataService.getSpotifyData().subscribe(
      response => {
        //console.log('AAAAAAAAAAAAAA'+response)
      }      
    )*/
  }
}
