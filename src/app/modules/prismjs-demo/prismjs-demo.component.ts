import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prismjs-demo',
  templateUrl: './prismjs-demo.component.html',
  styleUrls: ['./prismjs-demo.component.scss']
})
export class PrismjsDemoComponent implements OnInit {

  hamlContent = `= ['hi', 'there', 'reader!'].join " "`;

  cssContent = `
    .ui-datatable table {
      border-collapse:collapse;
      width: 100% !important;
      table-layout: fixed;
    }
  `;

  scssContent = `
    $height:30px;
    .ui-datatable table {
        border-collapse:collapse;
        width: 100% !important;
        table-layout: fixed;
    }
  `;

  typescriptContent = `
    import { MenuItem } from './models';
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';

    @Component({
      selector: 'app-docs',
      templateUrl: './docs.component.html',
      styleUrls: ['./docs.component.scss']
    })
    export class DocsComponent implements OnInit {

      menuList = new Array<MenuItem>();

      constructor(
        private activatedRoute: ActivatedRoute,
      ) { }

      ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
          this.menuList = data.config;
        });
      }

    }
  `;

  constructor() { }

  ngOnInit() {
  }

}
