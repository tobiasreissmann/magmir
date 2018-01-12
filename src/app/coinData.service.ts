import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinDataService {

  constructor(private http: Http) { }

  getLitecoin() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=EUR').map( res => res.json());
  };

}
