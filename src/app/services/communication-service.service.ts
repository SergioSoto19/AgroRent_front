import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  private detallesClickedSource = new Subject<number>();

  constructor(private router: Router) { }
  detallesClicked$ = this.detallesClickedSource.asObservable();

  enviarDetallesClicked(id: number) {
    this.detallesClickedSource.next(id);
    this.router.navigate(['dashboard-user', 'machinery-info', id]);  // se ajusta la nueva ruta  machinery-info/:id
  }

}
