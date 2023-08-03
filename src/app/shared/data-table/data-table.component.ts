import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit{

  @Input() data: any;
  dataSource : any;
  headerTable : any;
  selectedIndex : any;
  selectedParentIndex : any;
  selectedVariations : Array<any> = [];

  ngOnInit(): void {
    this.data.record.forEach((element : any) => {
      element.list.forEach((element2 : any) => {
        element2.selectedVariation = element2.variations1;
        element2.selectedVariationPrice = element2.price1;
      });
    });
   
    this.dataSource = this.data.record;
    console.log(this.dataSource);
  }
  setShow(id : any){
    //this.pop= this.pop==id ? -1 : id;
    console.log(id);
  }

  onPopupClick(i : any , m : any , flag ?: string) {
    console.log('onclick = ' + i);
    if(flag){
      this.selectedIndex = undefined;
      this.selectedParentIndex = m;
      
    }
    else{
      this.selectedIndex = i;
      this.selectedParentIndex = m;
    }
  }
  onVariationSelect(itemName : any, selectedValue : any, indexOfItem : any, parentindexOfItem : any, selectedValuePrice : any, ) {

    this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariation = selectedValue;
    this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariationPrice = selectedValuePrice;
    
  }
  onVariationSelectDropdown(selectedValue : any, indexOfItem : any, parentindexOfItem : any) {

    if(selectedValue.target.options.selectedIndex == 0){
      this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariationPrice = this.dataSource[parentindexOfItem].list[indexOfItem].price1
    }
    if(selectedValue.target.options.selectedIndex == 1){
      this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariationPrice = this.dataSource[parentindexOfItem].list[indexOfItem].price2
    }
    if(selectedValue.target.options.selectedIndex == 2){
      this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariationPrice = this.dataSource[parentindexOfItem].list[indexOfItem].price3
    }
    this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariation = selectedValue.target.value;
    
  }

  colorChange(itemName : any , value : any){
    const index = this.selectedVariations.findIndex((el) => el.name === itemName)
    if(this.selectedVariations.length >0 && this.selectedVariations[index].value == value){
     return true
    }
    else{
      return false;
    }

  }
}
