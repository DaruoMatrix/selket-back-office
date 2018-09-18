import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


   clientList:any;
   selectedClient;
  constructor(private restService: RestService) { 
    this.getClients();
  }

  ngOnInit() {
  }
  getClients()
  {
      this.restService.getUsers().then(data =>{
      console.log("data : ",data);
      this.clientList = data;
   
    })  
  }

  onSelect(client): void {
    this.selectedClient = client;
  }

}
