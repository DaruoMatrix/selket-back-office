import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../providers/rest.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { SnotifyService } from '../../../node_modules/ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError:boolean= false;

    @ViewChild('username')  username;
    @ViewChild('password')  password;
  constructor(private restService : RestService,private router: Router,private snotifyService: SnotifyService) { }

  ngOnInit() {
  }

    
  OnSubmitLogin(username, password){
    

    this.restService.adminAuthentification(username, password).subscribe((data:any)=>{


      if(data.success){
        console.log('success')
        this.restService.storeAdminData(data.token, data.admin);
        console.log('data admin :',data.admin);
        this.snotifyService.success('Bienvenue '+ data.admin.username, {
          timeout: 1000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });
        this.router.navigate(['dashboard']);

      } 
      
      else {  
        this.isLoginError = true;
      }

    }, (err: HttpErrorResponse)=> {
      this.isLoginError = true;
    })
  }



}
