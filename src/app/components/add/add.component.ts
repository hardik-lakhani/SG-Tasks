import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  ProducList: any = [];
  submitted = false;
  Picture:any;
  show=false;

  constructor(private fb: FormBuilder, private toastr: ToastrService, public dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      picture:['',Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })

  }
  AddProducts(data) {
    this.submitted = true;
    let p = JSON.parse(localStorage.getItem("product-list"));

    if (this.addForm.valid) {
      if (p == null) {
        data.picture=this.Picture;
        this.ProducList.push(data);
        localStorage.setItem("product-list", JSON.stringify(this.ProducList));
        this.toastr.success('Products Added Succeessfull!!', 'Success!!');
        this.dialogRef.close();
      }
      else if (!!p) {
        this.ProducList = JSON.parse(localStorage.getItem("product-list"));
        data.picture=this.Picture;
        this.ProducList.push(data);
        localStorage.setItem("product-list", JSON.stringify(this.ProducList));
        this.toastr.success('Products Added Succeessfull!!', 'Success!!');
        this.dialogRef.close();
      }
    }
    else {

    }

  }
  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.show=true;
      this.Picture = reader.result as string;
      
    };
    reader.onerror = (error) => {
    };
  }
}
