import { Component, OnInit, Input } from '@angular/core';

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
  @Input() currentTemp: string;
  @Input() minTemp: string;
  @Input() maxTemp: string;

  constructor() { }

  ngOnInit() {
    
  }

  get iconUrl() {
    return this.icon ? `http://openweathermap.org/img/w/${this.icon}.png` : null;
  }

}
