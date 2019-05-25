import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'citycard',
  templateUrl: './citycard.component.html',
  styleUrls: ['./citycard.component.scss'],
})
export class CityCardComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    
  }

}
