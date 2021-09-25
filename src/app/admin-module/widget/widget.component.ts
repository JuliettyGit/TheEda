import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor( private store$: Store ) { }

  ngOnInit(): void {
  }

}
