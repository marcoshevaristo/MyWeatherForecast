import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetricService } from '../commons/services/metric.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private metricService: MetricService) { }

  ngOnInit() {
    const currentMetric = localStorage.getItem('temperatureMetric');
    if (!currentMetric) {
      localStorage.setItem('temperatureMetric', 'C');
    }
  }

  navigate() {
    this.router.navigate([this.currentRouteIsSearch() ? 'main-list' : 'search']);
  }

  get searchIcon() {
    return this.currentRouteIsSearch() ? 'fas fa-times' : 'fas fa-search';
  }

  get temperatureFormatLabel() {
    return 'º' + localStorage.getItem('temperatureMetric');
  }

  private currentRouteIsSearch() {
    return this.router.url === '/search';
  }

  public changeTemperatureMetric() {
    const currentMetric = localStorage.getItem('temperatureMetric');
    let newMetric = 'C';
    if (currentMetric === 'C') {
      newMetric = 'F';
    }
    localStorage.setItem('temperatureMetric', newMetric);
    this.metricService.changeMetric.next(newMetric);
  }
}
