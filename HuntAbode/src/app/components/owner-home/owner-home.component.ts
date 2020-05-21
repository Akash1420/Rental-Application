import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Home } from "src/app/models/home";
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { RentalService } from "src/app/services/rental.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent implements OnInit {

  
  focus;
  focus1;
  focus2;
  ownerForm:FormGroup;
  message:boolean=false;
  resultStatus:number;
  constructor(private fb: FormBuilder,private rentalService:RentalService,private router: Router) { }

  gemail:string;
  ngOnInit(): void {
    this.ownerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      
    
});

  }

  get f(){
    return this.ownerForm.controls;
  }
  
  onSubmit(){
    console.log("form value=", this.ownerForm.value);
    this.gemail=this.ownerForm.value.email;
    console.log("Email=",this.gemail);
     this.rentalService.addHouseOwner(this.ownerForm.value,this.gemail)
            .subscribe(res=>{
              console.log(res);
              this.resultStatus=res.status;
              if(res.status!=201)
              this.message=true;
               // this.router.navigate(" ",{gmail})
            }); 
          
            console.log("Email again=",this.gemail);
            setTimeout(() => { this.getdata();  }, 1000);
          }

          getdata()
          {
            if(this.message==false)
            {
            this.router.navigate(["user-profile",{email:this.gemail}]);
            }
          }

}
