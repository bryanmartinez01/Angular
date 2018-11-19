import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private appservice: AppServiceService) { }

  ngOnInit() {
  }

  replaceHeader(event){
  	this.appservice.submenu.length = 0;
  	this.appservice.submenu.push("General Info", "Coverage Details", "Quote Option", "Attachments", "Print", "Exit");
  	
  	this.appservice.breadCrumb.length = 0;
  	this.appservice.breadCrumb.push(event.path[3].childNodes[0].innerText);
  	this.appservice.breadCrumb.push(event.target.textContent);
  }
}
