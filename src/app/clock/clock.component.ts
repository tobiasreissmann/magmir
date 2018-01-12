import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  now:string='----';

  ngOnInit() {
    /////////first run
    var time = new Date();
      this.now = ('0'+time.getHours()).substr(-2) + ('0'+time.getMinutes()).substr(-2);

    ////////after one second epilepsed
    let timeoutId = setInterval(() => {        
      var time = new Date();
      this.now = ('0'+time.getHours()).substr(-2) + ('0'+time.getMinutes()).substr(-2);
    }, 1000);
  }

}
