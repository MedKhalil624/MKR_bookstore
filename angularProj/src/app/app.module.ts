import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookListService } from './services/book-list.service';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'category/:id', component: BookListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [AppComponent, BookListComponent, PageNotFoundComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [BookListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
