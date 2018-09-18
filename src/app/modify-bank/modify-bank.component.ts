import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-modify-bank',
  templateUrl: './modify-bank.component.html',
  styleUrls: ['./modify-bank.component.css']
})
export class ModifyBankComponent implements OnInit {
  @Input() bank;
  bankList;
  constructor(private restService :RestService,private snotifyService: SnotifyService) { 

    console.log("bank data",this.bank)
    
  }

  ngOnInit() {
    
  }

  updateBank(form : NgForm,bank_id){
    this.restService.UpdateBank(form.value,bank_id).subscribe((data:any) => {
      console.log("bank :",data);
      if(data.success == true){
          this.resetForm();
          this.snotifyService.success("Banque modifier", {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
        console.log('bank modified');

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
