import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-delievery',
  templateUrl: './delievery.component.html',
  styleUrls: ['./delievery.component.scss']
})
export class DelieveryComponent implements OnInit {
  delieveryForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    $('.navbar-toggler').hide();
  
    this.delieveryForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'mob': new FormControl('', Validators.compose([Validators.required, Validators.pattern('[6789][0-9]{9}')])),
      'address': new FormControl('', Validators.compose([Validators.required, Validators.minLength(20)])),
    })


  }
  placeOrder(value) {
    this.submitted = true;
    if (this.delieveryForm.valid) {
      Swal.fire(value.name, 'Order Placed Successful ', 'success');
      this.router.navigate(['/products'])

    }

  }
}
