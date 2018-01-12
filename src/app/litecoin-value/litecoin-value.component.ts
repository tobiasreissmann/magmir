import { Component, OnInit } from '@angular/core';
import { CoinDataService } from '../coinData.service'

@Component({
  selector: 'app-litecoin-value',
  templateUrl: './litecoin-value.component.html',
  styleUrls: ['./litecoin-value.component.css']
})
export class LitecoinValueComponent implements OnInit {

  currentLitecoin:any;

  constructor(private _coinDataService: CoinDataService) { }

  ngOnInit() {
    this._coinDataService.getLitecoin().subscribe(
      response => {
        //console.log(response);
        this.currentLitecoin=response[0].price_eur;
        this.currentLitecoin=parseFloat(this.currentLitecoin).toFixed(3);
      }
    )

    let timeoutId = setInterval(() => {
      this._coinDataService.getLitecoin().subscribe(
        response => {
          //console.log(response);
          this.currentLitecoin=response[0].price_eur;
          this.currentLitecoin=parseFloat(this.currentLitecoin).toFixed(3);
        }
      )
    }, 5000);
  }
}
