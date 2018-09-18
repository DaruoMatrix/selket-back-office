import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { SnotifyService } from '../../../node_modules/ng-snotify';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-modify-manager',
  templateUrl: './modify-manager.component.html',
  styleUrls: ['./modify-manager.component.css']
})
export class ModifyManagerComponent implements OnInit {
  
  @Input() manager;
  bankList;
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

  UpdateManager(form : NgForm,manager_id)
  {
    console.log('on submit clicked');
    console.log('Form value : ',form.value)
    this.restService.UpdateManager(form.value,manager_id).subscribe((data:any) => {
      console.log("data :",data);
      if(data.success == true){
          this.resetForm();
          this.snotifyService.success("Chef d'agence modifié", {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
        console.log('manager modified');

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
  bankChange(val:any){
    console.log("val : ",val);
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
      name:'',
      email:''
     
    }}
}
