import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';
import { BookListService } from 'src/app/services/book-list.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  constructor(
    private _bookService: BookListService,
    private _activatedRoute: ActivatedRoute
  ) {}

  book: Book = new Book();

  ngOnInit(): void {
    this.getBookInfo();
  }

  getBookInfo() {
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');

    this._bookService.getBook(id).subscribe((data) => {
      console.log(data);
      this.book = data;
    });
  }
}
