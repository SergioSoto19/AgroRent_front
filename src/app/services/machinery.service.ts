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

 /*


  public getRequestfilter(): Observable<any> {
    return this.http.get('maquinaria/filterCategory');
  }*/

   //peticion por catgoria o id
  sgetRequestfilter(idOrCategoria: number | string): Observable<any> {
    let params: HttpParams = new HttpParams();
  
    if (typeof idOrCategoria === 'number') {
      params = params.set('id', idOrCategoria.toString());
    } else if (typeof idOrCategoria === 'string') {
      params = params.set('categoria', idOrCategoria);
    }
    return this.http.get('maquinaria/filterCategory', { params });
  }


  getRequestfilterUserDue(id: number): Observable<any> {
    // Construir los parámetros de la solicitud
    const params = new HttpParams().set('id', id.toString());
    // Realizar la solicitud HTTP con los parámetros
    return this.http.get('maquinaria/filtereMachineryUser', { params });
  }

  
  



}
