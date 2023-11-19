import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MachineryService {

  constructor(private http: HttpClient) { }

  public getRequest(): Observable<any> {
    return this.http.get('maquinaria/hideMachinery');
  }

  public postRequest(body: any): Observable<any> {
    console.log(body)
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('maquinaria/create', body, { 'headers': headers });
  }



  public getRequestfilter(): Observable<any> {
    return this.http.get('maquinaria/filterCategory');
  }


  sgetRequestfilter(id: number): Observable<any> {
    
    // Construir los parámetros de la solicitud
    const params = new HttpParams().set('id', id.toString());

    // Realizar la solicitud HTTP con los parámetros
    return this.http.get('maquinaria/filterCategory', { params });
  }

}
