import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-occupancy',
  templateUrl: './filter-occupancy.component.html',
  styleUrls: ['./filter-occupancy.component.css']
})
export class FilterOccupancyComponent implements OnInit {
  homes: Array<Home> = []
  email: string;
  occupancy: string;
  closeResult: string;
  id: number;
  message:boolean=false;
  constructor(private rentalService: RentalService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('occupancy'), params.get('email'));
      this.email = params.get('email');
      this.occupancy = params.get('occupancy');
      console.log("occupancy=", this.occupancy);

    })
    this.rentalService.fetchHomeByOccupancy(this.occupancy)
      .subscribe((res: Array<Home>) => {
        console.log(res);
        this.homes = res;
        if(this.homes.length==0)
        {
          this.message=true;
        }
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

  back() {
    this.router.navigate(["view-property", { email: this.email }]);
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
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
      return 'with: $reason';
    }
  }

}
