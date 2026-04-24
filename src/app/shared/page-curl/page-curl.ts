import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageStateService } from '../page-state.service';

@Component({
  selector: 'app-page-curl',
  template: `
    @if (prevRoute) {
      <div class="curl curl--prev" (click)="go(prevRoute!, 'prev')">
        <span class="curl__arrow">←</span>
      </div>
    }
    @if (nextRoute) {
      <div class="curl curl--next" (click)="go(nextRoute!, 'next')">
        <span class="curl__arrow">→</span>
      </div>
    }
  `,
  styles: [`
    /* ── triángulo "página doblada" con clip-path ── */
    .curl {
      position: fixed;
      bottom: 0;
      width: 80px;
      height: 80px;
      background: rgba(255, 255, 255, 0.88);
      cursor: pointer;
      z-index: 100;
      transition: width 0.2s ease, height 0.2s ease, filter 0.2s ease;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.18));
    }

    /* esquina inferior-derecha: ángulo recto abajo-derecha */
    .curl--next {
      right: 0;
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }

    /* esquina inferior-izquierda: ángulo recto abajo-izquierda */
    .curl--prev {
      left: 160px;   /* empieza justo después del nav fijo */
      clip-path: polygon(0 0, 100% 100%, 0 100%);
    }

    .curl--next:hover,
    .curl--prev:hover {
      width: 100px;
      height: 100px;
      filter: drop-shadow(0 0 10px rgba(233, 30, 140, 0.4));
    }

    /* flecha dentro del triángulo */
    .curl__arrow {
      position: absolute;
      bottom: 13px;
      font-family: 'Hammersmith One', sans-serif;
      font-size: 20px;
      color: #e91e8c;
      text-shadow: 1px 1px 0 #ffde59;
      pointer-events: none;
      transition: transform 0.2s ease;
    }

    .curl--next .curl__arrow { right: 13px; }
    .curl--prev .curl__arrow { left: 13px;  }

    .curl--next:hover .curl__arrow { transform: translateX(3px);  }
    .curl--prev:hover .curl__arrow { transform: translateX(-3px); }
  `]
})
export class PageCurl {
  @Input() prevRoute: string | null = null;
  @Input() nextRoute: string | null = null;

  private router     = inject(Router);
  private pageState  = inject(PageStateService);

  go(route: string, direction: 'next' | 'prev') {
    this.pageState.direction.set(direction);
    this.router.navigate([route]);
  }
}
