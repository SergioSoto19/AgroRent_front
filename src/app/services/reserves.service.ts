import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  constructor(private http: HttpClient) { }


  getRequestfilter(id: number): Observable<any> {
    // Construir los parámetros de la solicitud
    const params = new HttpParams().set('id', id.toString());
    return this.http.get('reservas/getReserve', { params });
  }

  
  public postRequest(body: any): Observable<any> {
    console.log(body)
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('reservas/createReserve', body, { 'headers': headers });
  }
}

