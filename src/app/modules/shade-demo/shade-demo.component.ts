import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shade-demo',
  templateUrl: './shade-demo.component.html',
  styleUrls: ['./shade-demo.component.scss']
})
export class ShadeDemoComponent implements OnInit {

  showShade1 = false;

  showShade2 = false;

  showShade3 = false;

  shade3Opacity: number = 0.4;

  shade3Color: string = 'blue';

  constructor() { }

  ngOnInit() {
  }

  changeShowShade(index: number): void {
    if (1 === index) {
      this.showShade1 = !this.showShade1;
    } else if (2 === index) {
      this.showShade2 = !this.showShade2;
    } else if (3 === index) {
      console.log(this.shade3Color);
      console.log(this.shade3Opacity);
      this.showShade3 = !this.showShade3;
    }
  }

}
