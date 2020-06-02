import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
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
  CheckoutForm:FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private fb:FormBuilder,private location:Location) {
    this.idno = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    $('.navbar-toggler').hide();
    this.ProductList = JSON.parse(localStorage.getItem("product-details"));
    console.log(this.ProductList);
    this.LoggedUser = JSON.parse(localStorage.getItem("logged-user"));
    this.CheckoutForm=this.fb.group({
      payment:['cod',Validators.required]
    })

  }

  onCheckout(data, type) {
    // this.submitted=true;
    $("#exampleModalCenter").modal("hide");
    console.log(data);
    console.log(type)
    if (type == "cod") {
  
      this.router.navigate(['/products/' + this.idno + '/case-on-delivey'])
    }
    else {
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
    console.log(response)
    console.log(response.razorpay_payment_id);
    Swal.fire('Great', 'Your Payment Was Successfull', 'success');
    this.location.back();
  }
  imageHover(ev){
    console.log(ev)
  }
}
