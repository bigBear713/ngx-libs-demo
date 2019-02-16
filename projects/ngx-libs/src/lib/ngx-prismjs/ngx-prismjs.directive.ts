import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';
import { NgxPrismjsService } from './ngx-prismjs.service';

@Directive({
  selector: '[ngxPrismjs]'
})
export class NgxPrismjsDirective implements AfterViewInit {
  // 语言
  @Input() ngLanguage: string = 'javascript';

  constructor(
    private elementRef: ElementRef,
    private prismjsService: NgxPrismjsService,
  ) { }

  ngAfterViewInit() {
    const languages = this.ngLanguage.trim().toLowerCase();
    const element = this.elementRef.nativeElement;
    const languageSign1 = `language-${languages}`;
    const languageSign2 = `lang-${languages}`;

    if (!element.classList.contains(languageSign1) && !element.classList.contains(languageSign2)) {
      element.classList.add(languageSign1);
    }

    this.prismjsService.highlightElement(element);
  }

}
