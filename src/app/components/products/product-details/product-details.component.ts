import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import * as _ from 'lodash';

declare var $: any;

declare var Razorpay: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ProductList: any;
  test;
  LoggedUser: any;
  payment = false;
  gender = null;
  idno: any;
  OrderedItem: any = [];
  CheckoutForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private location: Location) {
    this.idno = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    $('.navbar-toggler').hide();
    this.ProductList = JSON.parse(localStorage.getItem("product-details"));
    this.LoggedUser = JSON.parse(localStorage.getItem("logged-user"));
    this.CheckoutForm = this.fb.group({
      payment: ['cod', Validators.required]
    })

  }

  onCheckout(data, type) {
    $("#exampleModalCenter").modal("hide");
   
    if (type == "cod") {
      this.router.navigate(['/products/' + this.idno + '/case-on-delivey']);
      localStorage.setItem("cod-item", JSON.stringify(data));
    }
    else {
      this.test = JSON.stringify(data)
      var options = {
        key: "rzp_test_NVDmQrhcK04sZO",
        amount: data.price * 100,
        name: data.name,
        description: data.description,


        prefill: {
          "name": this.LoggedUser.firstName + " " + this.LoggedUser.lastName,
          "email": this.LoggedUser.email,
          // "contact": this.shared.customerData.customers_telephone,

        },
        notes: {},
        theme: {
          color: "blue"
        },

        handler: this.paymentResponseHander.bind(this)

      };
      var rzp1 = new Razorpay(options);

      rzp1.open();

    }


  }
  paid() { alert(); }
  paymentResponseHander(response) {

    let type = { type: "online" }
    let p = _.merge(JSON.parse(this.test), type)
    let pay={paymentid:response.razorpay_payment_id}
    let m = _.merge(this.LoggedUser, p,pay);
   let t=JSON.parse(localStorage.getItem("odered-item"));
   if(t==null){
    this.OrderedItem.push(m);
    localStorage.setItem("odered-item", JSON.stringify(this.OrderedItem));
    Swal.fire('Great', 'Your Payment Was Successfull', 'success');
    this.location.back();
   }
   else{
    this.OrderedItem = JSON.parse(localStorage.getItem("odered-item"));
    this.OrderedItem.push(m);
    localStorage.setItem("odered-item", JSON.stringify(this.OrderedItem));
    Swal.fire('Great', 'Your Payment Was Successfull', 'success');
    this.location.back();
   }
  
  }
  imageHover(ev) {
    // console.log(ev)
  }
}
