import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from "@angular/material";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() navigationSidedrawer: MatDrawer;
  constructor() { }

  ngOnInit() {
  }

}
