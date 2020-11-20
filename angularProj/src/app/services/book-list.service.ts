import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  //baseUrl = 'http://localhost:8080/api/v1/books?size=5';
  baseUrl = 'http://localhost:8080/api/v1/books';
  constructor(private _httpClient: HttpClient) {}
  getBooks(categoryid: number): Observable<Book[]> {
    const searchUrl = `${this.baseUrl}/search/byCateg?id=${categoryid}`;
    return this._httpClient
      .get<getInterfaceBook>(searchUrl)
      .pipe(map((response) => response._embedded.books));
  }
}
interface getInterfaceBook {
  _embedded: {
    books: Book[];
  };
}
