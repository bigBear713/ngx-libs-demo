import { Component, OnInit } from '@angular/core';
import { NgxJsoneditorOptions, NGX_JSONEDITOR_MODE } from 'ngx-libs';

@Component({
  selector: 'app-jsoneditor-demo',
  templateUrl: './jsoneditor-demo.component.html',
  styleUrls: ['./jsoneditor-demo.component.scss']
})
export class JsoneditorDemoComponent implements OnInit {

  jsonOption1: NgxJsoneditorOptions = {
    mode: NGX_JSONEDITOR_MODE.CODE,
    search: true
  };

  jsonOption2: NgxJsoneditorOptions = {
    mode: NGX_JSONEDITOR_MODE.TREE,
    search: true
  };

  jsonOption3: NgxJsoneditorOptions = {
    mode: NGX_JSONEDITOR_MODE.VIEW,
    search: true
  };

  jsonOption4: NgxJsoneditorOptions = {
    mode: NGX_JSONEDITOR_MODE.FORM,
    search: true
  };

  jsonOption5: NgxJsoneditorOptions = {
    mode: NGX_JSONEDITOR_MODE.TEXT,
    search: true
  };
  // 初始化数据
  jsonData = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { "a": "b", "c": "d" },
    String: "Hello World"
  };
  // 获取到的结果数据
  result: Object;

  constructor() { }

  ngOnInit() {
  }

  /**  获取更改后的json数据
   *
   *
   * @param {Object} jsonData
   * @memberof JsoneditorDemoComponent
   */
  getJsonData(jsonData: Object): void {
    console.log(jsonData);
    this.result = jsonData;
  }

}
