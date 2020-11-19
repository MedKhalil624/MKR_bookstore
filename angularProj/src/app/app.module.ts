import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookListService } from './services/book-list.service';

@NgModule({
  declarations: [AppComponent, BookListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [BookListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
