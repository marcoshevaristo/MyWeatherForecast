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
  @Input() currentTemp: number;
  @Input() alreadyAdded: boolean;
  @Output() itemClickEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  get _currentTemp() {
    return this.currentTemp ? this.currentTemp.toFixed(0) + 'ºC' : '';
  }

  itemClick() {
    this.itemClickEvent.emit(this.id);
  }

}
