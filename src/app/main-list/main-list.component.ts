import { Component, OnInit } from '@angular/core';
import { MainListService } from './main-list.service';
import { City } from '../commons/interfaces/city';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {

  public cities: City[];
  constructor(private mainListService: MainListService) { }

  ngOnInit() {
    this.cities = this.mainListService.getCities();
  }

}
