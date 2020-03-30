import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIURL="http://52.90.246.238:5000/apis/users/"

@Injectable({
  providedIn: 'root'
})
export class LoginsignupService {

  constructor(private http:HttpClient) { }

   // Registration 
   registration(data) {
    return this.http.post(APIURL + 'registeruser', data)
  }

  //Login...
  login(data) {
    return this.http.post(APIURL + 'login', data)
  }

  //check username....
  checkusername(data){
    return this.http.get(APIURL + 'checkusername?username='+data)
  }
}
