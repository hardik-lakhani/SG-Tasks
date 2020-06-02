import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('../app/newcomponents/login/login.component.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../app/newcomponents/register/register.component.module').then(m => m.RegisterModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/newcomponents/dashboard/dashboard.component.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../app/components/users/users.component.module').then(m => m.UsersModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../app/components/home/home.component.module').then(m => m.HomedModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../app/components/products/products.component.module').then(m => m.ProductsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../app/components/profile/profile.component.module').then(m => m.ProfileModule)
  },
  {
    path: 'order',
    loadChildren: () => import('../app/components/order/order.component.module').then(m => m.OrderModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
