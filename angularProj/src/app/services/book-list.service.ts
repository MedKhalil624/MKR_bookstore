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
  getBooks(
    categoryid: number,
    currentPage: number,
    pageSize: number
  ): Observable<getInterfaceBook> {
    const searchUrl = `${this.baseUrl}/search/byCateg?id=${categoryid}&page=${currentPage}&size=${pageSize}`;
    return this._httpClient.get<getInterfaceBook>(searchUrl);
  }

  getCategory(): Observable<BookCategory[]> {
    return this._httpClient
      .get<getInterfaceCategory>(this.baseUrlCategory)
      .pipe(map((response) => response._embedded.categoryOfBook));
  }
  searchBook(
    keyword: string,
    currentPage: number,
    pageSize: number
  ): Observable<getInterfaceBook> {
    const searchBookUrl = `${this.baseUrl}/search/byKeyword?sku=${keyword}&page=${currentPage}&size=${pageSize}`;
    return this._httpClient.get<getInterfaceBook>(searchBookUrl);
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
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
interface getInterfaceCategory {
  _embedded: {
    categoryOfBook: BookCategory[];
  };
}
