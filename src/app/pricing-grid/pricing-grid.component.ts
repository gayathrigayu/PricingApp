import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-pricing-grid',
  templateUrl: './pricing-grid.component.html',
  styleUrls: ['./pricing-grid.component.scss']
})
export class PricingGridComponent implements OnInit{
  constructor(private service: CommonServiceService) {}
  tableData : any;
  showTable : boolean = false;
  ngOnInit(){
    this.service.getJSON().subscribe(data => {
        this.tableData = data;
        this.showTable = true;
    });
  }
}
