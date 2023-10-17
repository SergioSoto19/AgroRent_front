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

}
