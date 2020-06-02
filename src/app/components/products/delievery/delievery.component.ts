import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as _ from 'lodash';


declare var $: any;

@Component({
  selector: 'app-delievery',
  templateUrl: './delievery.component.html',
  styleUrls: ['./delievery.component.scss']
})
export class DelieveryComponent implements OnInit {
  delieveryForm: FormGroup;
  submitted = false;
  ChooseProduct: any;
  OrderedItem: any = [];
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    $('.navbar-toggler').hide();
    this.ChooseProduct = JSON.parse(localStorage.getItem("cod-item"))
    this.delieveryForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'mob': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[6789][0-9]{9}')])),
      'address': new FormControl('', Validators.compose([Validators.required, Validators.minLength(20)])),
    })


  }
  placeOrder(value) {
    this.submitted = true;
    if (this.delieveryForm.valid) {
      let type = { type: "cod", paymentid: "Manual" }
      let l = _.merge(this.ChooseProduct, type);
      let p = _.merge(value, l);
      let t = JSON.parse(localStorage.getItem("odered-item"));
      if (t == null) {
        this.OrderedItem.push(p);
        localStorage.setItem("odered-item", JSON.stringify(this.OrderedItem));
        Swal.fire(value.name, 'Order Placed Successful ', 'success');
        this.router.navigate(['/products']);
      }
      else {
        this.OrderedItem = JSON.parse(localStorage.getItem("odered-item"));
        this.OrderedItem.push(p);
        localStorage.setItem("odered-item", JSON.stringify(this.OrderedItem));
        Swal.fire(value.name, 'Order Placed Successful ', 'success');
        this.router.navigate(['/products']);
      }


    }

  }
}
