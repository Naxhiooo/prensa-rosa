import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private router = inject(Router);

  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => (e as NavigationEnd).urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  isNodo = computed(() => this.currentUrl().startsWith('/nodo-'));

  // ===== LÓGICA DE LA FLECHA =====
  getNextRoute(): string {
    const url = this.router.url;
    
    if (url === '/' || url === '/home') return '/nodo-1';
    if (url.includes('/nodo-1')) return '/nodo-2';
    if (url.includes('/nodo-2')) return '/nodo-3';
    if (url.includes('/nodo-3')) return '/nodo-4';
    if (url.includes('/nodo-4')) return '/'; // Vuelve a la portada
    
    return '/nodo-1'; // Por defecto
  }
}