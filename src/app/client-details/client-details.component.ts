import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { RestService } from '../providers/rest.service';
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  @Input() client;
  @ViewChild('content')content:ElementRef;
  constructor(private restService:RestService) { }

  ngOnInit() {
    
  }

  callAll()
  {
    this.sendUser();
    this.DownloadPDF();
  }

  sendUser() {
    this.restService.changeUser(this.client);
  }
  
  DownloadPDF(){
    let doc = new jsPDF();
    let specialElemenrHandlers = {
      '#editror': function(element,renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':500,
      'elementHandlers ':specialElemenrHandlers
    });
    doc.setFont('fontfaceName');

    doc.save(this.client.first_name +' '+ this.client.last_name +' details' );
  }

}
