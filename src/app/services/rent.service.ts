import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  public postRequest(body: any): Observable<any> {
    console.log(body)
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('rent/create', body, { 'headers': headers });
  }

  getRequestfilterUser(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get('rent/getRentUser', {params});
  }


  getfilterIdUser(id: number): Observable<any> {
    // Construir los parámetros de la solicitud
    const params = new HttpParams().set('id', id.toString());
    return this.http.get('rent/getRentUser', { params });
  }

  public getRents(): Observable<any> {
    return this.http.get('rent/getAllRents');
  }



  


 
}
