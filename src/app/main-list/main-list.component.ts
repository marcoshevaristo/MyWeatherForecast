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
    this.wheatherInfo = this.activatedRoute.snapshot.data['listData'].list;
  }

}
