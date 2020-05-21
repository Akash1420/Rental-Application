import { Component, OnInit } from '@angular/core';
import { RentalService } from "src/app/services/rental.service";
import { InterestedHome } from "src/app/models/interested-home";
import { Home } from "src/app/models/home";
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booked-property',
  templateUrl: './booked-property.component.html',
  styleUrls: ['./booked-property.component.css']
})
export class BookedPropertyComponent implements OnInit {


  email: string;
  interestedHomes: Array<InterestedHome>;
  homeIds: Array<number> = [];
  approves: Array<String> = [];
  requiredApprove: String;
  intHomes: Array<Home> = [];
  id: number;
  message:boolean=false;
  closeResult: string;

  constructor(private rentalService: RentalService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    //this.email="abcd@gmail.com";

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('email'));
      this.email = params.get('email');
      console.log("Email=", this.email);

    })

    console.log("Email=", this.email);
    this.rentalService.fetchInterestedHomes(this.email)
      .subscribe((res: Array<InterestedHome>) => {
        console.log("result", res);
        this.interestedHomes = res;
        console.log("Interested Homes are", this.interestedHomes);
        if(this.interestedHomes.length==0)
        this.message=true;
      })


    setTimeout(() => { this.getdata(); }, 1000);


  }



  getdata() {
    this.interestedHomes.forEach(interestHome => {
      this.homeIds.push(interestHome.homeId);
      this.approves.push(interestHome.approve);
    });

    console.log("All home ids=", this.homeIds);

    /* this.homeIds.forEach(id => {
      this.rentalService.fetchPropertyById(id)
  .subscribe((res:Home)=> {
    console.log("result",res);
    this.intHomes.push(res);
    console.log("Home is",this.intHomes);
    });
   }) */
    this.rentalService.fetchHomesOfInterestedHomes(this.email)
      .subscribe((res: Array<Home>) => {
        console.log("result", res);
        this.intHomes = res;
        console.log("Homes are", this.intHomes);
      })

  }

  loadDetails(i: number) {
    this.requiredApprove = this.approves[i];
    this.id = this.homeIds[i];
    this.router.navigate(["detailed-interested-property", { id: this.id, approve: this.requiredApprove }]);
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}

