import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { PageFlip } from 'page-flip';
import { PageStateService } from '../page-state.service';

@Component({
  selector: 'app-book',
  template: `
    <div class="book-wrapper">
      <div class="book-el" #bookEl>
        <ng-content />
      </div>
    </div>
    @if (showPrev()) {
      <button class="book-nav book-nav--prev" (click)="goPrev()" aria-label="Página anterior">
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
          <path d="M14 2L2 14L14 26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    }
    <button class="book-nav book-nav--next" (click)="goNext()" aria-label="Página siguiente">
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
        <path d="M2 2L14 14L2 26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `,
  styleUrl: './book.scss',
})
export class Book implements AfterViewInit, OnDestroy {
  @ViewChild('bookEl') bookEl!: ElementRef<HTMLDivElement>;
  @Input() nextRoute: string | null = null;
  @Input() prevRoute: string | null = null;

  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private pageState = inject(PageStateService);
  private pf: any;
  private currentPage = 0;
  private totalPages = 0;

  showPrev = signal(false);

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.bookEl.nativeElement;

    this.pf = new PageFlip(el, {
      width: 9999,
      height: 9999,
      size: 'stretch',
      minWidth: 315,
      maxWidth: 99999,
      minHeight: 420,
      maxHeight: 99999,
      drawShadow: true,
      flippingTime: 900,
      usePortrait: true,
      showCover: false,
      mobileScrollSupport: false,
      maxShadowOpacity: 0.6,
      autoSize: false,
      useMouseEvents: false,
      showPageCorners: false,
    } as any);

    this.pf.loadFromHTML(el.querySelectorAll('.page'));
    this.totalPages = this.pf.getPageCount();

    // Si venimos desde el nodo siguiente (botón atrás), ir a la última página
    if (this.pageState.direction() === 'prev') {
      const lastSpread = this.totalPages - 2;
      if (lastSpread > 0) {
        this.pf.turnToPage(lastSpread);
        this.currentPage = lastSpread;
      }
      this.pageState.direction.set('next');
    }

    this.showPrev.set(this.currentPage > 0 || !!this.prevRoute);

    this.pf.on('flip', (e: any) => {
      this.currentPage = e.data;
      this.showPrev.set(e.data > 0 || !!this.prevRoute);
    });
  }

  goNext() {
    if (this.currentPage >= this.totalPages - 2 && this.nextRoute) {
      this.pageState.direction.set('next');
      this.router.navigate([this.nextRoute]);
    } else {
      this.pf?.flipNext();
    }
  }

  goPrev() {
    if (this.currentPage <= 0 && this.prevRoute) {
      this.pageState.direction.set('prev');
      this.router.navigate([this.prevRoute]);
    } else {
      this.pf?.flipPrev();
    }
  }

  ngOnDestroy() {
    this.pf?.destroy();
  }
}
