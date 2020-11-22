import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  searchBook(keyword: string) {
    console.log(keyword);
    this._route.navigateByUrl('search/' + keyword);
  }
}
