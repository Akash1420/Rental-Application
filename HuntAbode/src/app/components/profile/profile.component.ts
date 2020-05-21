import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeOwner } from 'src/app/models/home-owner';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    email: string;
    homeOwner: HomeOwner;
    id: number;
    constructor(private rentalService: RentalService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {

        //this.email="ikshita@gmail.com";

        this.route.paramMap.subscribe(params => {

            console.log('***', params.get('email'));
            this.email = params.get('email');

        })

        this.rentalService.fetchOwnerByEmail(this.email).subscribe((res: HomeOwner) => {

            this.homeOwner = res;
            console.log("Home Owner is=", this.homeOwner);
            this.id = this.homeOwner.id;
            console.log("id=", this.id);
        })
    }

    addMyProperty() {
        this.router.navigate(["add-property", { ownerId: this.id, email: this.email }]);
    }

    viewMyProperty() {
        this.router.navigate(["view-property-owner", { email: this.email }]);
    }

    home() {
        this.router.navigate(["home"]);
    }
}
