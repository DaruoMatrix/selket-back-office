import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Manager } from '../models/manager';
import { Bank } from '../models/bank';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/catch';
@Injectable()
export class RestService {
  private UserSource = new BehaviorSubject(User);
  currentUser = this.UserSource.asObservable();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiBaseUrl:string = '';
  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'http://localhost:3000/';
  }


  getUsers(){
    return new Promise(resolve=>{
      this.http.get(this.apiBaseUrl+'users/all').subscribe(data=>{resolve(data);
      },err =>{console.log(err);
      });
    })
  }
  
  getBanks(){
    return new Promise(resolve=>{
      this.http.get(this.apiBaseUrl+'banks').subscribe(data=>{resolve(data);
      },err =>{console.log(err);
      });
    })
  }

  sendMail(manager: Manager){
    const body :Manager = {
      name: manager.name,
      email: manager.email,
      content: manager.content,
      bank_id:manager.bank_id
     
    }
    return this.http.post(this.apiBaseUrl+'email',body, this.httpOptions)
  }

  getManagers(){
    return new Promise(resolve=>{
      this.http.get(this.apiBaseUrl+'manager').subscribe(data=>{resolve(data);
      },err =>{console.log(err);
      });
    })
  }
  removeManager(manager_id: String){
      console.log("service solicite")
    return this.http.delete(this.apiBaseUrl+'manager/'+manager_id)
      .catch(this.handleError);

    }
    removeBank(bank_id: String){
      console.log("service solicite")
    return this.http.delete(this.apiBaseUrl+'banks/'+bank_id)
      .catch(this.handleError);

    }


  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }


  addManager(manager: Manager){
    const body :Manager = {
      name: manager.name,
      email: manager.email,
      content: manager.content,
      bank_id :manager.bank_id
    }
    return this.http.post(this.apiBaseUrl+'manager',body, this.httpOptions)
  }

  addBank(bank: Bank){
    const body :Bank = {
      name: bank.name,
      email: bank.email
    }
    return this.http.post(this.apiBaseUrl+'banks',body, this.httpOptions)
  }

  UpdateBank(bank: Bank,bank_id){
    const body :Bank = {
      name: bank.name,
      email: bank.email
    }
    return this.http.put(this.apiBaseUrl+'banks/'+bank_id,body, this.httpOptions)
  }

  UpdateManager(manager: Manager,manager_id){
    const body :Manager = {
      name: manager.name,
      email: manager.email,
      content: manager.content,
      bank_id :manager.bank_id
    }
    return this.http.put(this.apiBaseUrl+'manager/'+manager_id,body, this.httpOptions)
  }

  

  changeUser(user) {
    this.UserSource.next(user);
  }





//hdmi

  authToken:any;
  admin:any;



  adminAuthentification(username, password){
    var data = {
      username: username,
      password: password
    }
    return this.http.post(this.apiBaseUrl+'admin/authenticate',data, this.httpOptions )
  }



  storeAdminData(token, admin){
    localStorage.setItem('id_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.admin = admin;
  }

  Logout(){
    this.authToken= null;
    this.admin= null;
    localStorage.clear();
  }

  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }
  
  getAdmin(){
    const admin = JSON.parse(localStorage.getItem('admin'));
    return admin;
  }



}
  
