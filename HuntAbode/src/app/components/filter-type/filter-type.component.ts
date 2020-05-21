import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.css']
})
export class FilterTypeComponent implements OnInit {

  homes: Array<Home> = []
  email: string;
  type: string;
  id: number;
  message:boolean=false;
  constructor(private rentalService: RentalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      console.log('***', params.get('type'), params.get('email'));
      this.email = params.get('email');
      this.type = params.get('type');
      console.log("Type=", this.type);

    })
    this.rentalService.fetchHomeByType(this.type)
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
}
