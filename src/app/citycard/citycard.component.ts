import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'citycard',
  templateUrl: './citycard.component.html',
  styleUrls: ['./citycard.component.scss'],
})
export class CityCardComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() weatherState: string;
  @Input() icon: string;
  @Input() currentTemp: number;
  @Input() minTemp: string;
  @Input() maxTemp: string;

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  get iconUrl() {
    return this.icon ? `http://openweathermap.org/img/w/${this.icon}.png` : null;
  }

  get _currentTemp() {
    return this.currentTemp ? this.currentTemp.toFixed(0) + 'ºC' : '';
  }

  goToDetails() {
    this.router.navigate([`/weather-details/${this.id}`])
  }

}
