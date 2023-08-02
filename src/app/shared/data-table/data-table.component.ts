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

  onPopupClick(i : any , flag ?: string) {
    console.log('onclick = ' + i);
    if(flag){
      this.selectedIndex = undefined;
    }
    else{
      this.selectedIndex = i;
    }
  }
  onVariationSelect(itemName : any, selectedValue : any, indexOfItem : any, parentindexOfItem : any, selectedValuePrice : any, ) {

    /*const pushObj = {
      'name' : itemName,
      'value' : selectedValue
    }
    if(this.selectedVariations.length == 0) {
      //push into the array
      
      this.selectedVariations.push(pushObj);
    } else {
      let anyFound = this.selectedVariations.find(element => element.name == itemName);
      if(typeof anyFound !== 'undefined' && anyFound) {
        //Replace value
        const index = this.selectedVariations.findIndex((el) => el.name === itemName)
        this.selectedVariations[index] = pushObj;
      } else {
        //push to the array
        this.selectedVariations.push(pushObj);
      }
      
    }*/
    this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariation = selectedValue;
    this.dataSource[parentindexOfItem].list[indexOfItem].selectedVariationPrice = selectedValuePrice;
    
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
