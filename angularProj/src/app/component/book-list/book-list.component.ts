import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookCategory } from 'src/app/common/book-category';
import { BookListService } from 'src/app/services/book-list.service';
import { Book } from '../../common/book';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CartItem } from 'src/app/common/cart-item';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  /*books: Book[] = [
    {
      sku: 'text100',
      description: 'desc1 ',
      unitPrice: 500,
      imgUrl: 'img1',
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text200',
      description: 'desc2',
      unitPrice: 600,
      imgUrl: 'img2',
      active: true,
      unitsInStock: 200,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: 'text300',
      description: 'desc3',
      unitPrice: 700,
      imgUrl: 'img3',
      active: false,
      unitsInStock: 300,
      createdOn: new Date(),
      updatedOn: null,
    },
  ];*/
  books: Book[] = [];
  //pageOfItems: Array<Book>;
  //pageSize: number = 2;

  currentCategoryId: number = 1;
  searchForBooks: boolean = false;

  /////new properties for pagination
  currentPage: number = 1;
  pageSize: number = 2;
  totalRecords: number = 0;
  previousCategory: number = 1;
  constructor(
    private _bookService: BookListService,
    private _activatedRoute: ActivatedRoute,
    private _config: NgbPaginationConfig,
    private _cartService: CartServiceService,
    private _ngxSpinnerService: NgxSpinnerService
  ) {
    _config.maxSize = 1;
    _config.boundaryLinks = true;
  }

  listBook() {
    this._ngxSpinnerService.show();
    this.searchForBooks = this._activatedRoute.snapshot.paramMap.has('keyword');
    if (this.searchForBooks) {
      console.log('in search');
      this.handleSearchedBooks();
    } else {
      console.log('in list');
      this.handleListBook();
    }
  }
  handleListBook() {
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has(
      'id'
    );

    if (hasCategoryId) {
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get(
        'id'
      );
    } else {
      this.currentCategoryId = 1;
    }

    if (this.currentCategoryId != this.previousCategory) {
      this.currentPage = 1;
    }
    this.previousCategory = this.currentCategoryId;
    this._bookService
      .getBooks(this.currentCategoryId, this.currentPage - 1, this.pageSize)
      .subscribe((data) => {
        setTimeout(() => {
          console.log(data);
          this._ngxSpinnerService.hide();
          this.books = data._embedded.books;
          this.currentPage = data.page.number + 1;
          this.totalRecords = data.page.totalElements;
          this.pageSize = data.page.size;
        }, 3000);
      });
  }
  handleSearchedBooks() {
    const searchFor: string = this._activatedRoute.snapshot.paramMap.get(
      'keyword'
    );
    console.log(searchFor);
    this._bookService
      .searchBook(searchFor, this.currentPage - 1, this.pageSize)
      .subscribe((data) => {
        console.log(data);
        this._ngxSpinnerService.hide();
        this.books = data._embedded.books;
        this.currentPage = data.page.number + 1;
        this.totalRecords = data.page.totalElements;
        this.pageSize = data.page.size;
      });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBook();
    });
  }
  /*pageClick(pageOfItems: Array<Book>) {
    // update the current page of items
    this.pageOfItems = pageOfItems;
  }*/
  updatePageSize(updatedValue: number) {
    console.log(updatedValue);
    this.pageSize = updatedValue;
    this.currentPage = 1;
    this.listBook();
  }
  addToCart(book: Book) {
    console.log(`book name : ${book.sku} and the price ${book.unitPrice}`);
    let cartItem: CartItem = new CartItem(book);
    this._cartService.addToCart(cartItem);
  }
}
