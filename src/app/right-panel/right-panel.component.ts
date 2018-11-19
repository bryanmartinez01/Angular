import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
	currentHeader = [];
	submenu = [];

  constructor(private appservice: AppServiceService) { }

  ngOnInit() {
  	this.currentHeader = this.appservice.breadCrumb;
  	this.submenu = this.appservice.submenu;
  }
}
