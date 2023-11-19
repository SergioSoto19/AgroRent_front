import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class InfoUserSessionService {
  private infoUsersE: any;
  
  @Output() infoUserSesion: EventEmitter<any> = new EventEmitter();

  getInfoUserSesion(){
    return this.infoUsersE
  }

  setinfo(dato: any){
    this.infoUsersE = dato
  }

  constructor() { }
}
