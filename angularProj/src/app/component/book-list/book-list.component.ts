import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  currentCategoryId: number;
  constructor(
    private _bookService: BookListService,
    private _activatedRoute: ActivatedRoute
  ) {}
  listBook() {
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
    this._bookService.getBooks(this.currentCategoryId).subscribe((data) => {
      console.log(data);
      this.books = data;
    });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBook();
    });
  }
}
