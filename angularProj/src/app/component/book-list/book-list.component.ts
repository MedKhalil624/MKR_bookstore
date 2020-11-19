import { Component, OnInit } from '@angular/core';
import { BookListService } from 'src/app/services/book-list.service';
import { Book } from '../../common/book';

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
  books: Book[];
  constructor(private _bookService: BookListService) {}
  listBook() {
    this._bookService.getBooks().subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }
  ngOnInit(): void {
    this.listBook();
  }
}
