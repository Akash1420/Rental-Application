import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/models/home';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HomeTenant } from 'src/app/models/home-tenant';

@Component({
  selector: 'app-view-property-owner',
  templateUrl: './view-property-owner.component.html',
  styleUrls: ['./view-property-owner.component.css']
})
export class ViewPropertyOwnerComponent implements OnInit {

  homes: Array<any> = []
  email: string;
  showMessage: boolean = false;
  closeResult: string;
  imgs: Array<string> = [];
  message: boolean = false;
  msg: Array<boolean>=[];
  tenants: Array<HomeTenant>;
  hId:number;

  constructor(private rentalService: RentalService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('check1!');
    
    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('email'));
      this.email = params.get('email');

    })

    this.rentalService.fetchPropertryCertain(this.email)
      .subscribe((res: Array<any>) => {
        console.log(res);
        this.homes = res;
        if (this.homes.length == 0) {
          this.message = true;
        }
        for(let i=0;i<this.homes.length;i++)
          {
            this.msg[i]=false;
          }
          console.log("message initially=",this.msg);
      });

      
     setTimeout(() => { this.check(); }, 3000);
  }

  check()
  {
    console.log("homes are=",this.homes);
        this.homes.forEach((home,index) => {
          this.hId=home.id;
          this.rentalService.fetchInterestedTenants(this.hId)
      .subscribe((res: Array<HomeTenant>) => {
        this.tenants = res;
        if(this.tenants.length==0)
        this.msg[index]=true;
        
          })
     })
     setTimeout(() => { this.check2(); }, 2000);
  }

  check2()
  {
    console.log("message after change=",this.msg);
  }

  manageComponents(homeId: number,i:number) {
    
    this.rentalService.fetchInterestedTenants(homeId)
      .subscribe((res: Array<HomeTenant>) => {
        console.log("Result", res);
        this.tenants = res;
        
        console.log("interested tenants are=", this.tenants);
        console.log("Length of tenants=", this.tenants.length);

        setTimeout(() => { this.getdata(homeId,i); }, 1000);


      })
    

  }

  getdata(homeId: number,i:number) {
    if (this.tenants.length == 0) {
      this.msg[i] = true;
      console.log("msg=", this.msg[i]);

    }
    if (this.msg[i] == false) {
      console.log("msg=", this.msg);
      console.log("Message in navigation=", this.msg[i]);
      this.router.navigate(["tenant-info", { id: homeId, email: this.email }]);
    }
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

  deleteProperty(id: number) {
    /* to be implemented  */
    console.log('Delete attempted with id: ' + id);
    this.rentalService.deleteHome(id)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
          this.showMessage = true;
          this.homes = this.homes.filter((home) => home.id != id)
        }
      })

    this.rentalService.deleteInterestedHome(id).subscribe((res: any) => {
      console.log(res);

    })

  }

  updateProperty(HomeId: number) {
    console.log(HomeId)
    this.router.navigate(["edit-property", { id: HomeId, email: this.email }]);
  }
}

/*

deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe((res:any)=> {
      console.log(res);
     if(res.status == 200){
       this.showMessage = true;
       this.employees = this.employees.filter((employee)=> employee.id!=id)
     }
    })
  }


*/


