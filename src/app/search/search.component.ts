import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, map, filter } from 'rxjs/operators';
import { SearchService } from './search-service';
import { MainListService } from '../main-list/main-list.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public cityNameInput = '';
  public keypress = new Subject<string>();
  public isLoading = false;
  public searchResults;
  @ViewChild('inputName') inputName: ElementRef;

  constructor(private searchService: SearchService,
              private mainListService: MainListService,
              private router: Router) { }

  ngOnInit() {
    this.keypress.pipe(
      distinctUntilChanged(),
      debounceTime(400))
    .subscribe(text => {
      this.cityNameInput = text;
      this.isLoading = true;
      this.searchResults = null;
      this.searchService.searchForCities(text)
        .then(response => {
          this.searchResults = response;
        })
        .finally(() => this.isLoading = false);
    });

    this.router.events.subscribe(() => {
      this.searchResults = null;
      setTimeout(() => this.inputName.nativeElement.focus());
    });
      
  }

  itemClick(cityId) {
    const userCities = this.mainListService.getUserCitiesList();
    if (!userCities.includes(cityId)) {
      this.cityNameInput = '';
      this.mainListService.addToUserList(cityId);
      this.router.navigate(['/main-list'], {queryParams: [{newCityId: cityId}]});
    }
  }
}
