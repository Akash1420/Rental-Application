import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    focus;
    focus1;
    constructor(private router: Router) { }
    ngOnInit() {}

    tenantComponent()
    {
        this.router.navigate(["tenant-home"]);
    }

    ownerComponent()
    {
        this.router.navigate(["owner-home"]);
    }
    
}
