import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-book',
  template: `
    <div class="book-wrapper">
      <div class="book-el" #bookEl>
        <ng-content />
      </div>
    </div>
  `,
  styleUrl: './book.scss',
})
export class Book implements AfterViewInit, OnDestroy {
  @ViewChild('bookEl') bookEl!: ElementRef<HTMLDivElement>;

  private platformId = inject(PLATFORM_ID);
  private pf: any;

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const { PageFlip } = await import('page-flip');
    const el = this.bookEl.nativeElement;

    this.pf = new PageFlip(el, {
      // width grande garantiza portrait en cualquier pantalla:
      // la condición interna es: containerWidth < width×2
      // con width=9999 → siempre verdadero → siempre una página
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
    } as any);

    this.pf.loadFromHTML(el.querySelectorAll('.page'));
  }

  ngOnDestroy() { this.pf?.destroy(); }
}
