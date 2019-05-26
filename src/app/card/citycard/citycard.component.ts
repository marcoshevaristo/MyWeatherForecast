import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MetricService } from 'src/app/commons/services/metric.service';

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
  @Output() removeEvent = new EventEmitter();

  public _minTemp;
  public _maxTemp;
  public _currentTemp;

  constructor(private router: Router,
              private metricService: MetricService) { }

  ngOnInit() {
    this.updateTempValues();
    this.metricService.changeMetric.subscribe(() => {
      this.updateTempValues();
    });
  }

  get iconUrl() {
    return this.icon ? `http://openweathermap.org/img/w/${this.icon}.png` : null;
  }

  goToDetails() {
    this.router.navigate([`/weather-details/${this.id}`])
  }

  removeEventClick() {
    this.removeEvent.emit(this.id);
  }

  private updateTempValues() {
    this._minTemp = {temp: this.minTemp};
    this._maxTemp = {temp: this.maxTemp};
    this._currentTemp = {temp: this.currentTemp}
  }

}
