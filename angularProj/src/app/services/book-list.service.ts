import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  baseUrl = 'http://localhost:8080/api/v1/books';
  constructor(private _httpClient: HttpClient) {}
  getBooks(): Observable<Book[]> {
    return this._httpClient
      .get<getInterfaceBook>(this.baseUrl)
      .pipe(map((response) => response._embedded.books));
  }
}
interface getInterfaceBook {
  _embedded: {
    books: Book[];
  };
}
