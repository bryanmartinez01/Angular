import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-cont',
  templateUrl: './img-cont.component.html',
  styleUrls: ['./img-cont.component.css']
})
export class ImgContComponent implements OnInit {
	imgUrl = "";

  constructor() { }

  ngOnInit() {
  }

  putImg(loc:string){
  	this.imgUrl = loc;
  }

}
