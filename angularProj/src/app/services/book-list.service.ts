import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  //baseUrl = 'http://localhost:8080/api/v1/books?size=5';
  baseUrl = 'http://localhost:8080/api/v1/books';
  baseUrlCategory = 'http://localhost:8080/api/v1/book-category';

  constructor(private _httpClient: HttpClient) {}
  getBooks(categoryid: number): Observable<Book[]> {
    const searchUrl = `${this.baseUrl}/search/byCateg?id=${categoryid}`;
    return this._httpClient
      .get<getInterfaceBook>(searchUrl)
      .pipe(map((response) => response._embedded.books));
  }

  getCategory(): Observable<BookCategory[]> {
    return this._httpClient
      .get<getInterfaceCategory>(this.baseUrlCategory)
      .pipe(map((response) => response._embedded.categoryOfBook));
  }
  searchBook(keyword: string): Observable<Book[]> {
    const searchBookUrl = `${this.baseUrl}/search/byKeyword?sku=${keyword}`;
    return this._httpClient
      .get<getInterfaceBook>(searchBookUrl)
      .pipe(map((response) => response._embedded.books));
  }
  getBook(id: number): Observable<Book> {
    const getBookUrl = `${this.baseUrl}/${id}`;
    return this._httpClient.get<Book>(getBookUrl);
  }
}
interface getInterfaceBook {
  _embedded: {
    books: Book[];
  };
}
interface getInterfaceCategory {
  _embedded: {
    categoryOfBook: BookCategory[];
  };
}
