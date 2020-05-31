import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

/*test-1-date  */


export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    public isNight: boolean=false;
    public isDay: boolean=true;


    public now: Date = new Date();

    constructor(public location: Location, private router: Router) {
        setInterval(() => {
            this.now = new Date();
        }, 5000);
        
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
        if(this.now.getHours()>18 || this.now.getHours()<7){
            this.isNight=true;
            this.isDay=false;
        }


    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    }

    tenantComponent() {
        this.router.navigate(["tenant-home"]);
    }

    ownerComponent() {
        this.router.navigate(["owner-home"]);
    }

    homeComponent() {
        this.router.navigate(["home"]);
    }

    aboutComponent() {
        this.router.navigate(["landing"]);
    }
    insightsComponent() {
        this.router.navigate(["insights"]);
    }
}
