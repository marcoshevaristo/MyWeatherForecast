import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigate() {
    this.router.navigate([this.currentRouteIsSearch() ? 'main-list' : 'search']);
  }

  get searchIcon() {
    return this.currentRouteIsSearch() ? 'fas fa-times' : 'fas fa-search';
  }

  private currentRouteIsSearch() {
    return this.router.url === '/search';
  }

}
