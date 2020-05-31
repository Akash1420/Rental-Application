import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { rentalStore } from 'src/app/models/rentalStore';
import { Graph } from 'src/app/models/graph';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  constructor(private rentalService: RentalService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels =[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: ''},
    {data: [], label: ''}
  ];
  public graph:Graph;
  public noOfHomes:number;
  public noOfTenants:number;
  public location:string;
  message:boolean=false;
  public msg:boolean=false;
 /*  myColors = [
    {
      backgroundColor:[ 'red','red','blue','white'],
      borderColor: ['red','rgb(0, 0, 128)','white','white']
    }
  
  ]; */

  ngOnInit(): void {
  }

  fetchData(location:string)
  {
    this.message=false;
    this.barChartLabels=[];
    this.msg=true;
    this.rentalService.getInsights(location).subscribe((res: rentalStore) => {
      
      console.log("Location=",res.location);
      this.location=location;
      this.noOfHomes=res.noOfHomes;
      this.noOfTenants=res.noOfTenants;

      console.log("No. of Homes",res.noOfHomes);
      console.log("No. of Tenants",res.noOfTenants);
       if(res.noOfHomes==0 && res.noOfTenants==0)
      {
        this.message=true;
        console.log("Message=",this.message);
      } 
      this.barChartLabels.push(this.location);
      console.log("barchartlabel=",this.barChartLabels);
      this.barChartData = [
        {data: [this.noOfHomes], label: ' No.Of.Homes'},
        {data: [this.noOfTenants], label: 'No.Of.Tenants'},
        {data: [0], label: ''},
        {data: [0], label: ''}
        
        
      ];

      //this.barChartData.data.push(this.noOfHomes);

      //setTimeout(() => { this.getdata(); }, 1000);

      
    })
  }

 /*  getdata()
  {
    //this.barChartLabels.push(this.location);

    this.graph.data=this.noOfHomes;
    this.graph.label='NoOfHomes';
    //this.barChartData.push(this.graph);

    this.graph.data=this.noOfTenants;
    this.graph.label='NoOfTenants';
    //this.barChartData.push(this.graph);

    console.log("dataset value=",this.barChartData);

  } */
}
