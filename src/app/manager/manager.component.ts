import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { RestService } from '../providers/rest.service';
import { Manager } from '../models/manager';
import { SnotifyService } from '../../../node_modules/ng-snotify';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  manager : Manager;
  bankList;
  emailSelected;
  bankSelected
  constructor(private restService :RestService,private snotifyService: SnotifyService) { 
    this.getbanks()
    if(! this.manager){
      this.manager={
        email:"",
        content:"Ce message est automatique",
        name:"",
        bank_id:""
      };
    }
  }

  ngOnInit() {
  }

  bankChange(val:any){
    console.log("val : ",val);
    console.log("bank : ",this.bankSelected);
  }

  addManager(form : NgForm)
  {
    console.log('on submit clicked');
    console.log('Form value : ',form.value)
    this.restService.addManager(form.value).subscribe((data:any) => {
      console.log("data :",data);
      if(data.success == true){
          this.resetForm();
          this.snotifyService.success("Chef d'agence ajouter", {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
        console.log('manager added');

      } else {
        this.snotifyService.error("Veuillez remplir tout les champs", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });
        console.log('erreur');
      }

    });
  }

  
  getbanks()
  {
      this.restService.getBanks().then(data =>{
      this.bankList = data;
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
