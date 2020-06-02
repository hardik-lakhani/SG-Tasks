import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MaterialModule } from './material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { AddComponent } from './components/add/add.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { EditComponent } from './components/edit/edit.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AgGridModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatInputModule,
    // MaterialModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    SharedModule

  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
