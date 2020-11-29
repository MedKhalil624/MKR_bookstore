import { Book } from './book';

export class CartItem {
  id: number;
  name: string;
  unitPrice: number;
  imgUrl: string;
  quantity: number;
  constructor(book: Book) {
    this.id = book.id;
    this.name = book.sku;
    this.unitPrice = book.unitPrice;
    this.imgUrl = book.imgUrl;
    this.quantity = 1;
  }
}
