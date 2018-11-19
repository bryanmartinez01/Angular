import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-q-qp',
  templateUrl: './q-qp.component.html',
  styleUrls: ['./q-qp.component.css']
})
export class QQpComponent implements OnInit {
	displayedColumns: string[] = ['strSelect', 'coverCode', 'section', 'bulletNo', 'sumInsured', 'sortSe', 'addSi', 'actions'];
  	dataSource = new MatTableDataSource<Record>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  	this.dataSource.paginator = this.paginator;
  }
}
export interface Record {
  coverCode: string;
  section: string;
  bulletNo: number;
  sumInsured: string;
  sortSe: number;
}

  const ELEMENT_DATA: Record[] = [
  {	
  	coverCode: 'Contract Works', 
  	section: 'I', 
  	bulletNo: 1.1, 
  	sumInsured: '50,000,000.00', 
  	sortSe: 10,
  },
  {	
  	coverCode: 'Materials Supplied', 
  	section: 'I', 
  	bulletNo: 1.2, 
  	sumInsured: '10,000,000.00', 
  	sortSe: 20
  },
  {	
  	coverCode: 'Lorem Ipsum', 
  	section: 'I', 
  	bulletNo: 1.3, 
  	sumInsured: '30,000,000.00', 
  	sortSe: 30
  }
];
