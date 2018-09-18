import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { RestService } from './providers/rest.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router:Router,
        private restService:RestService,
        ) { }
    
        canActivate() {
           if(this.restService.loggedIn()){
               return true;
           } else {
               this.router.navigate(['/login']);
               return false;
           }
        }
}