import { Component, OnInit } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Bank } from '../models/bank';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
  bank:Bank;
  constructor(private restService :RestService,private snotifyService: SnotifyService) { 

    if(! this.bank){  
      this.bank={
        email:"",   
        name:""
      };
    }

  }

  ngOnInit() {
  }


  addBank(form : NgForm)
  {
    console.log('on submit clicked');
    console.log('Form value : ',form.value)
    this.restService.addBank(form.value).subscribe((data:any) => {
      console.log("bank :",data);
      if(data.success == true){
          this.resetForm();
          this.snotifyService.success("Banque ajouter", {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
        console.log('bank added');

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

  resetForm(form?: NgForm){
    if(form!= null)
    form.reset();
    this.bank = {
      name:'',
      email:''
     
    }}
}
