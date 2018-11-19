import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ImgContComponent } from './img-cont/img-cont.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

import { AppServiceService } from './app-service.service';
import { QQpComponent } from './q-qp/q-qp.component';


@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    LeftPanelComponent,
    RightPanelComponent,
    ImgContComponent,
    QQpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
         {
            path: 'quotationprocessing',
            component: QQpComponent
         },
         {
            path: 'quotationinquiry',
            component: QQpComponent
         },
         {
            path: 'underwriting1',
            component: QQpComponent
         },
         {
            path: 'underwriting2',
            component: QQpComponent
         },
         {
            path: 'accounting1',
            component: QQpComponent
         },
         {
            path: 'accounting2',
            component: QQpComponent
         },
         {
            path: 'claims1',
            component: QQpComponent
         },
         {
            path: 'claims2',
            component: QQpComponent
         },
         {
            path: 'security1',
            component: QQpComponent
         },
         {
            path: 'security2',
            component: QQpComponent
         },
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [AppServiceService],
  bootstrap: [MainBodyComponent]
})

export class AppModule { }