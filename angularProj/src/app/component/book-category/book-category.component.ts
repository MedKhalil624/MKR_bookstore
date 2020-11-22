import { Component, OnInit } from '@angular/core';
import { BookCategory } from 'src/app/common/book-category';
import { BookListService } from 'src/app/services/book-list.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css'],
})
export class BookCategoryComponent implements OnInit {
  categories: BookCategory[];
  constructor(private _bookService: BookListService) {}

  listCategory() {
    this._bookService.getCategory().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }

  ngOnInit(): void {
    this.listCategory();
  }
}
