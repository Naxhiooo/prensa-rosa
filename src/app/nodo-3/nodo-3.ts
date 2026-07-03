import { Component, signal } from '@angular/core';
import { Book } from '../shared/book/book';

@Component({
  selector: 'app-nodo-3',
  imports: [Book],
  templateUrl: './nodo-3.html',
})
export class Nodo3 {
  
  // Signal que guarda el ID del popup abierto. Si es null, está cerrado.
  activePopup = signal<string | null>(null);

  // Función para abrir un popup específico
  openPopup(id: string) {
    this.activePopup.set(id);
  }

  // Función para cerrar el popup
  closePopup() {
    this.activePopup.set(null);
  }
}