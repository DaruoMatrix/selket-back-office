import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { Manager } from '../models/manager';
import { Observable } from '../../../node_modules/rxjs/Observable';
@Component({
  selector: 'app-display-manager',
  templateUrl: './display-manager.component.html',
  styleUrls: ['./display-manager.component.css']
})
export class DisplayManagerComponent implements OnInit {
  managerList;
  bankList;
  selectedManager;
  managerData;
  constructor(private restService: RestService) {  
    this.getManagers();
    this.getBanks();
  }

  ngOnInit() {
    this.getManagers();
  }
  getManagers()
  {
      this.restService.getManagers().then(data =>{
      console.log("managers : ",data);
      this.managerList = data;
   
    })  
  }
  removeManager(manager_id: String)
  {
    console.log("remove clicked")
    this.restService.removeManager(manager_id).subscribe((data:any)=>{
      console.log('data : ',data); 
      this.getManagers();
    })
}




  getBanks()
  {
      this.restService.getBanks().then(data =>{
      console.log("banks : ",data);
      this.bankList = data;
   
    })  
  }
  onSelect(manager): void {
    this.selectedManager = manager;
  }
}
