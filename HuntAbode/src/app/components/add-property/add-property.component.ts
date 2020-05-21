import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Home } from "src/app/models/home";
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { RentalService } from "src/app/services/rental.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  focus;
  focus1;
  homeForm: FormGroup;
  email: string;
  ownerId: any;
  resultStatus: number;
  message: boolean = false;
  public urls: any[] = [{
    id: 1,
    url: ''
  }];
  myUrls: Array<string> = []
  notFull: boolean = true;
  myText: string = '';
  isUrlEmpty: boolean = false;



  constructor(private fb: FormBuilder, private rentalService: RentalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('email'));
      this.email = params.get('email');
      this.ownerId = params.get('ownerId');
      console.log("Email=", this.email);
      console.log("Owner id=", this.ownerId);
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
      urlOfImage: [[''], Validators.required],
      urls: ['', Validators.required],
      detailedLocation: ['', Validators.required],
      details: [''],
      ownerId: [this.ownerId]

    });

  }

  myHome = {

  }



  // addUrl() {
  //   this.urls.push(this.fb.control(''))
  // }

  onSubmit() {
    console.log("form value=", this.homeForm.value);
    console.log("Owner Id=", this.homeForm.value.ownerId);
    console.log("urls :", this.urls);

    for (let url of this.urls) {
      //  console.log("this is ",url.url);
      this.myUrls.push(url.url);

    }
    console.log(this.myUrls);

    this.myHome = {
      detailedLocation: this.homeForm.value.detailedLocation,
      details: this.homeForm.value.details,
      furnished: this.homeForm.value.furnished,
      location: this.homeForm.value.location,
      monthlyCost: this.homeForm.value.monthlyCost,
      name: this.homeForm.value.name,
      occupancy: this.homeForm.value.occupancy,
      ownerId: this.homeForm.value.ownerId,
      rooms: this.homeForm.value.rooms,
      securityDeposit: this.homeForm.value.securityDeposit,
      status: this.homeForm.value.status,
      type: this.homeForm.value.type,
      urlOfImage: this.myUrls

    }

    console.log("Object to Send: ", this.myHome)
    //  this.urls=this.homeForm.value.urlOfImage.split(',');
    //  console.log("Urls=", this.urls);
    this.rentalService.addPropertyCertain(this.myHome, this.email) //update object in this method accordingly
      .subscribe((res: any) => {
        console.log("result", res);
        this.resultStatus = res.status;
        if (this.resultStatus != 202) {
          this.message = true;
        }
      })

    setTimeout(() => { this.dashboard(); }, 1000);


  }
  get f() {
    return this.homeForm.controls;
  }

  dashboard() {
    if (this.message == false) {
      this.router.navigate(["user-profile", { email: this.email }]);
    }
  }

  /* test-1 */

  addUrl() {
    this.urls.push({
      id: this.urls.length + 1,
      url: ''
    });
    if (this.urls.length == 3) {
      this.notFull = false;
    }
    else {
      this.notFull = true;
    }
    this.isUrlEmpty = false;
  }

  removeUrl(i: number) {
    this.urls.splice(i, 1);
    this.notFull = true;
    if (i == 0) {
      this.isUrlEmpty = true
    }

  }

}