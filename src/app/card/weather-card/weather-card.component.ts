import { formatDate } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DaysOfWeek, mapNumberDayToDayOfWeek } from 'src/app/commons/enums/days-of-week';
import { MetricService } from 'src/app/commons/services/metric.service';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() weatherState: string;
  @Input() minTemp: number;
  @Input() maxTemp: number;
  @Input() currentTemp: number;
  @Input() icon: string;
  @Input() showRemoveButton = false;
  @Output() removeEvent = new EventEmitter;
  @Output() onClickEvent = new EventEmitter;

  public _minTemp;
  public _maxTemp;
  public _currentTemp;

  constructor(private metricService: MetricService) { }

  ngOnInit() {
    this.updateTempValues();
    this.metricService.changeMetric.subscribe(() => {
      this.updateTempValues();
    });
  }

  removeEventClick() {
    this.removeEvent.emit(this.id);
  }

  clickEvent() {
    this.onClickEvent.emit(this.id);
  }

  preventDefault($event) {
    $event.preventDefault();
  }

  get _title() {
    if (this.title && !isNaN(Date.parse(this.title))) {
      const date = new Date(this.title);
      const currentDate = new Date();
      let dayOfWeek;
      if (date.getDate() === currentDate.getDate()) {
        dayOfWeek = DaysOfWeek.TODAY;
      } else if (date.getDate() === currentDate.getDate() + 1) {
        dayOfWeek = DaysOfWeek.TOMORROW;
      } else {
        dayOfWeek = mapNumberDayToDayOfWeek(date.getDay());
      }
      return `${dayOfWeek}, ${this.getFormattedDate(date)}`;
    }
    return this.title;
  }

  get _weatherState() {
    if (this.weatherState) {
      return this.weatherState.substr(0, 1).toUpperCase() + this.weatherState.substr(1);
    }
  }

  get iconUrl() {
    return this.icon ? `http://openweathermap.org/img/w/${this.icon}.png` : null;
  }

  private getFormattedDate(date: Date) {
    const dateStr = formatDate(date.toDateString(), 'longDate', 'pt');
    return dateStr.slice(0, dateStr.length - 8) + '.';
  }

  private updateTempValues() {
    this._minTemp = {temp: this.minTemp};
    this._maxTemp = {temp: this.maxTemp};
    this._currentTemp = {temp: this.currentTemp}
  }
}
