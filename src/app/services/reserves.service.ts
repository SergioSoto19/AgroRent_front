import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  constructor(private http: HttpClient) { }

  //peticion id maquinaria
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

  //peticion segun id usuario soliti reserv
  getRequestfilterUser(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get('reservas/filterIdReserveUser', { params });


  }
  //peticion ofertas por aceptar solicitudes que envia
  getRequestfilterUserAccepted(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get('reservas/filterRequested', { params });
  }

  //actualizar estado 
  putEstadoRequestfilterUserAccepted(id: number, estado: string): Observable<any> {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('estado', estado);
  
    return this.http.put('reservas/changeStatus', {}, { params });
  }
  
}




