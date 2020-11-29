import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookListService } from './services/book-list.service';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './component/book-category/book-category.component';
import { SearchComponent } from './component/search/search.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import {
  JwPaginationComponent,
  JwPaginationModule,
} from 'jw-angular-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './component/cart-status/cart-status.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'category/:id', component: BookListComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'search/:keyword', component: BookListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStatusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    JwPaginationModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  providers: [BookListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
