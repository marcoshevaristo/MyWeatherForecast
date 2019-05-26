import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() weatherState: string;
  @Input() icon: string;
  @Input() currentTemp: number;
  @Input() minTemp: string;
  @Input() maxTemp: string;
  @Output() itemClickEvent = new EventEmitter<any>();

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

  itemClick() {
    this.itemClickEvent.emit(this.id);
  }

}
