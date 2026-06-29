import { Component, signal } from '@angular/core';
import { Book } from '../shared/book/book';

@Component({
  selector: 'app-nodo-2',
  imports: [Book],
  templateUrl: './nodo-2.html',
})
export class Nodo2 {
  readonly vvTotal = 5;
  vvIndex = signal(0);
  nextVv() { this.vvIndex.update(i => (i + 1) % this.vvTotal); }
  prevVv() { this.vvIndex.update(i => (i + this.vvTotal - 1) % this.vvTotal); }
  goToVv(i: number) { this.vvIndex.set(i); }
}
