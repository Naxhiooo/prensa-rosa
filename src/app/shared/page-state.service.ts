import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageStateService {
  direction = signal<'next' | 'prev'>('next');
}
