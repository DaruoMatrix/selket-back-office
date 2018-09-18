import { Component } from '@angular/core';
import { RestService } from './providers/rest.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  admin:any;
  constructor(private restService : RestService,private router :Router){
    this.getAdmin()
  }

  getAdmin(){
    this.admin = this.restService.getAdmin();
    console.log("data : ", this.admin)
    }

  logOut()
  {
    this.restService.Logout();
    this.router.navigate(['login']);
  }
}
