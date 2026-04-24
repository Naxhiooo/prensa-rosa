declare module 'page-flip' {
  export class PageFlip {
    constructor(element: HTMLElement, options: Record<string, unknown>);
    loadFromHTML(items: NodeListOf<Element> | HTMLElement[]): void;
    flipNext(): void;
    flipPrev(): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    on(event: string, callback: (e: { data: number }) => void): void;
    destroy(): void;
  }
}
