import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BookedPropertyComponent } from './components/booked-property/booked-property.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { ViewDetailPropertyComponent } from './components/view-detail-property/view-detail-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';

import { HomeModule } from './components/home/home.module';
import { LoginComponent } from './components/login/login.component';
import { ViewPropertyOwnerComponent } from './components/view-property-owner/view-property-owner.component';
import { EditPropertyComponent } from './components/edit-property/edit-property.component';
import { EditPropertyImagesComponent } from './components/edit-property-images/edit-property-images.component';
import { DetailedInterestedPropertyComponent } from './components/detailed-interested-property/detailed-interested-property.component';
import { TenantInfoComponent } from './components/tenant-info/tenant-info.component';
import { TenantHomeComponent } from './components/tenant-home/tenant-home.component';
import { OwnerHomeComponent } from './components/owner-home/owner-home.component';
import { LocationFilteredComponent } from './components/location-filtered/location-filtered.component';
import { FilterOccupancyComponent } from './components/filter-occupancy/filter-occupancy.component';
import { FilterTypeComponent } from './components/filter-type/filter-type.component';
import { FilterFurnishingComponent } from './components/filter-furnishing/filter-furnishing.component';
import { InsightsComponent } from './components/insights/insights.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ViewDetailPropertyComponent,
    ViewPropertyComponent,
    LoginComponent,
    ViewPropertyOwnerComponent,
    EditPropertyComponent,
    EditPropertyImagesComponent,
    BookedPropertyComponent,
    AddPropertyComponent,
    DetailedInterestedPropertyComponent,
    TenantInfoComponent,
    TenantHomeComponent,
    OwnerHomeComponent,
    LocationFilteredComponent,
    FilterOccupancyComponent,
    FilterTypeComponent,
    FilterFurnishingComponent,
    InsightsComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    ChartsModule
  ],
  exports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
