import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MainListService } from '../main-list/main-list.service';
import { SearchService } from './search-service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit, AfterContentChecked {

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
  }

  itemClick(cityId) {
    const userCities = this.mainListService.getUserCitiesList();
    if (!userCities.includes(cityId)) {
      this.mainListService.addToUserList(cityId);
      this.router.navigate(['/main-list'], {queryParams: [{newCityId: cityId}]});
    }
  }

  ngAfterViewInit() {
    this.router.events.subscribe(() => {
      this.searchResults = null;
      this.cityNameInput = '';
    });
  }
  
  ngAfterContentChecked() {
    this.inputName.nativeElement.focus();
  }
}
