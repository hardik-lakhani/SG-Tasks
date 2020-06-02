import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DelieveryComponent } from './delievery/delievery.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductsComponent },
      {
        path: ':id', children: [
          { path: '', component: ProductDetailsComponent },
          { path: 'case-on-delivey', component: DelieveryComponent },
        ],
      },
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
