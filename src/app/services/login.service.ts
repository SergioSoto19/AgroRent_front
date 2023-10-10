import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private urlAuth = environment.api_url

  constructor(
    private http:HttpClient
  ) { }

  getToken(){
    return localStorage.getItem('token')
  }
  setToken(token:any){
    return localStorage.setItem('token',token)
  }
  removeToken(){
    return localStorage.removeItem('token')
  }

    // console.log(this.urlAuth+"/api/login")
    // console.log("es", body)
  validateUser(body:any):Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post<any>('/api/login',body,{'headers':headers}); 
  }

  
}
