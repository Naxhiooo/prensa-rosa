import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() open = false;
  /** HTML string opcional: párrafos, <a href>, <strong>, etc. */
  @Input() set content(val: string | undefined) {
    this._safeContent = val ? this.sanitizer.bypassSecurityTrustHtml(val) : null;
  }
  @Output() closed = new EventEmitter<void>();

  _safeContent: SafeHtml | null = null;
  private sanitizer = inject(DomSanitizer);

  close() {
    this.closed.emit();
  }
}
