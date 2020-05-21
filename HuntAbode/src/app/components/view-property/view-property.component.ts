import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  homes: Array<Home> = []
  imgs: Array<string> = ["https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];
  email: string;
  location: string;
  furnished: string;
  id: number;
  ocupancy: string;
  type: string;
  closeResult: string;

  constructor(private rentalService: RentalService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute) { }

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

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('email'));
      this.email = params.get('email');
      console.log("Email=", this.email);

    })
    this.rentalService.fetchAllProperties()
      .subscribe((res: Array<Home>) => {
        console.log(res);
        this.homes = res;
      })

  }

  showDetails(homeId: number) {
    console.log("detail of home");
    this.id = homeId;
    this.router.navigate(["showDetail", { id: this.id, email: this.email }]);
  }

  interestHomes() {
    console.log("go to my interested homes ");
    this.router.navigate(["booked-property", { email: this.email }]);
  }

  locations(area: string) {
    this.location = area;
    this.router.navigate(["location-filtered", { email: this.email, location: this.location }]);
  }



  furnishing(furnish: string) {
    this.furnished = furnish;
    this.router.navigate(["furnishing-filtered", { email: this.email, furnished: this.furnished }]);
  }


  occupancy(ocupancy: string) {
    this.ocupancy = ocupancy;
    this.router.navigate(["occupancy-filtered", { email: this.email, occupancy: this.ocupancy }]);
  }

  homeType(type: string) {
    this.type = type;
    this.router.navigate(["type-filtered", { email: this.email, type: this.type }]);

  }

  home() {
    this.router.navigate(["home"]);
  }






}
