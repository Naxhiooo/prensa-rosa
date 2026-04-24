import { Component } from '@angular/core';
import { Book } from '../shared/book/book';

@Component({
  selector: 'app-nodo-3',
  imports: [Book],
  template: `
    <app-book>
      @for (p of pages; track p) {
        <div class="page" data-density="hard">
          <div class="page-content">
            <div class="page-label">NODO 3.{{ p }}</div>
            <p class="page-sub">Próximamente...</p>
          </div>
        </div>
      }
    </app-book>
  `,
})
export class Nodo3 {
  pages = [1, 2, 3, 4, 5, 6, 7, 8];
}
