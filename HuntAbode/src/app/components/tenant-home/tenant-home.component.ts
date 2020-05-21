import { Component, OnInit } from '@angular/core';
import {RentalService} from 'src/app/services/rental.service';



import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-home',
  templateUrl: './tenant-home.component.html',
  styleUrls: ['./tenant-home.component.css']
})
export class TenantHomeComponent implements OnInit {

  showMessage: boolean;
  gemail:string;
  constructor(private fb: FormBuilder,private rentalService:RentalService,private router: Router) { }

  focus;
  focus1;
  focus2;
  tenantForm : FormGroup;
  resultStatus:number;
  message:boolean=false;
  
  ngOnInit(): void {

    this.tenantForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
    console.log("Form value=",this.tenantForm.value);
    
  }
  get f(){
    return this.tenantForm.controls;
  }

  
onSubmit(){
  this.gemail=this.tenantForm.value.email;
  console.log("Email=",this.gemail);
  console.log("new form value", this.tenantForm.value);
  this.rentalService.addTenant(this.tenantForm.value,this.gemail)
  .subscribe(res=>{
    console.log(res);
    this.resultStatus=res.status;
    if(this.resultStatus!=201)
    {
      this.message=true;
    }
   // this.router.navigate("",{gemail})
  }); 

  setTimeout(() => { this.getdata();  }, 1000);
}

getdata()
{
  if(this.message==false)
  {
  this.router.navigate(["view-property",{email:this.gemail}]);
  }
}

}



