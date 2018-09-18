import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bankList;
  selectedBank;

  constructor(private restService:RestService) {
    this.getBanks();
   }

  ngOnInit() {
  }


  getBanks()
  {
      this.restService.getBanks().then(data =>{
      console.log("data : ",data);
      this.bankList = data;
   
    })  
  }

  removeBank(bank_id: String)
  {
    console.log("remove clicked")
    this.restService.removeBank(bank_id).subscribe((data:any)=>{
      console.log('data : ',data); 
      this.getBanks();
    })
}

onSelect(bank): void {
  this.selectedBank = bank;
}
}
