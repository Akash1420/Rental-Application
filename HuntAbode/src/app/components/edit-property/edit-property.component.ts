import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Home } from "src/app/models/home";
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { RentalService } from "src/app/services/rental.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  focus;
  focus1;
   homeForm: FormGroup;
   email:string;
   ownerId:any;
   id:any;
   property: any;
   
  constructor(private fb: FormBuilder,private rentalService:RentalService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('id'));
      this.id=params.get('id');
      this.email=params.get('email');
      console.log("Id=",this.id);
      console.log("Email = "+this.email);
      
    })


   
   this.homeForm = this.fb.group({
                  name: ['', Validators.required],
                  location: ['', Validators.required],
                  type: ['', Validators.required],
                  rooms: ['', Validators.required],
                  occupancy: ['', Validators.required],
                  status: ['', Validators.required],
                  furnished: ['', Validators.required],
                  monthlyCost: ['', Validators.required],
                  securityDeposit: ['', Validators.required],
                  urlOfImage: ['', Validators.required],
                  detailedLocation: ['', Validators.required],
                  details: ['', Validators.required],
                  ownerId: [this.ownerId]
                
            });

  }



onSubmit(){
  this.rentalService.updateOccupancyHome(this.id,this.homeForm.value.occupancy)
  .subscribe((res:any)=>{
    console.log(res);
  })

  this.rentalService.updateSecurityCostHome(this.id,this.homeForm.value.securityDeposit)
  .subscribe((res:any)=>{
    console.log(res);
  })

  this.rentalService.updatemonthlyCostHome(this.id,this.homeForm.value.monthlyCost)
  .subscribe((res:any)=>{
    console.log(res);
  })

  this.rentalService.updateStatusHome(this.id,this.homeForm.value.status)
  .subscribe((res:any)=>{
    console.log(res);
  })


  setTimeout(() => { this.viewPropertyOwner();  }, 1000);

  }

  viewPropertyOwner(){
    this.router.navigate(['view-property-owner',{email:this.email}])
  }
}



