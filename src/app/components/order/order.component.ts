import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenav } from '@angular/material/sidenav';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  OrderList: any = [];
  LoggedUser: any;
  displayedColumns: string[] = ['id', 'photo', 'name', 'price','buyer', 'type','paymentid'];
  dataSource: MatTableDataSource<any>;
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, private router: Router, private toast: ToastrService) {
  }

  ngOnInit(): void {
    let p = JSON.parse(localStorage.getItem("odered-item"));
    if (!!p) {
      this.OrderList = JSON.parse(localStorage.getItem("odered-item"));
      this.dataSource = new MatTableDataSource(this.OrderList);
    }
    else {

    }
    // this.LoggedUser = JSON.parse(localStorage.getItem("logged-user"));

    // if (this.LoggedUser == null) {
    //   Swal.fire('Oops...', 'Admin Please Login First', 'error');
    //   this.router.navigate(['/login'])
    // }
    // else {
    //   let p = JSON.parse(localStorage.getItem("odered-item"));
    //   if (!!p) {
    //     this.OrderList = JSON.parse(localStorage.getItem("odered-item"));
    //     this.dataSource = new MatTableDataSource(this.OrderList);
    //   }
    //   else {

    //   }
    // }


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }


  }

}
