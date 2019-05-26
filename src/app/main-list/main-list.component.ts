import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {

  public wheatherInfo: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const storedWeatherInfo = this.activatedRoute.snapshot.data['listData'];
    this.wheatherInfo = storedWeatherInfo && storedWeatherInfo.list ? storedWeatherInfo.list : null;
  }

}
