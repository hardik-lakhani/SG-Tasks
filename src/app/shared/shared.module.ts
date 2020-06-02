import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
// import { HeaderModule } from '../components/header/header.component.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    // HeaderModule
    // AppRoutingModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
