import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  public getRequest(): Observable<any> {
    return this.http.get('/usuarios');
  }

  public postRequest(body: any): Observable<any> {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('/usuarios/agregar', body, { 'headers': headers });
  }
}

