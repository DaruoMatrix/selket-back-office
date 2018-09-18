import { Component, OnInit } from '@angular/core';
import { Manager } from '../models/manager';
import { NgForm } from '../../../node_modules/@angular/forms';
import { RestService } from '../providers/rest.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
manager : Manager;
managerList;
emailSelected;
client;
clientFullName;



  constructor(private restService :RestService,private snotifyService: SnotifyService) { 
         
      this.getManagers();
    if(! this.manager){
      this.manager={
        email:"",
        content:"Ce message est automatique",
        name:"test",
        bank_id:""
      };
    }
    //this.concatName();

      console.log('client email :',this.client);
  }

  concatName()
  {
    
  }

  ngOnInit() { 
    this.restService.currentUser.subscribe(client => this.client = client);
    
  }
  managerChange(val:any){
    console.log("val : ",val);
  }


  sendMail(form : NgForm)
  {
    console.log('on submit clicked');
    //console.log('form value :',form.value);
    //console.log('form valid :',form.valid);
    this.snotifyService.info('Envoi en cours', {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true
    });
    this.restService.sendMail(form.value).subscribe((data:any) => {
      console.log("data :",data);
      if(data.success == true){
        this.snotifyService.success('Mail envoyé', {
          timeout: 1000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });
          this.resetForm();
        console.log('mail sent');

      } else if(!this.emailSelected ||this.clientFullName) {
        console.log('erreur');
        this.snotifyService.error("échec de l'envoi", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });
      }

    });
  }

  getManagers()
  {
      this.restService.getManagers().then(data =>{
      console.log("data : ",data);
      console.log("Client : ",this.client); 
      this.clientFullName = this.client.first_name+' '+this.client.last_name+' details';

    console.log("concat Name : ",this.clientFullName);
      this.managerList = data;

   
    })  
  }

  resetForm(form?: NgForm){
    if(form!= null)
    form.reset();
    this.manager = {
      email:'',
      content:'',
      name:'',
      bank_id:''
    }}



}