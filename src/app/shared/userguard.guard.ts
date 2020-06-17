import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let p = JSON.parse(localStorage.getItem("logged-user"));
    if (p == null) {
      Swal.fire('Oops...', 'User Please Login First', 'error');
      this.router.navigate(['/login']);
      return false;
    }
    else {
      if (p.usertype == "user") {
        return true
      }
      else {
        Swal.fire('Oops...', 'User Please Login First', 'error');
        this.router.navigate(['/login']);
        return false;
      }
    }
  }




}
