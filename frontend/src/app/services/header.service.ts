import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Header } from '../model/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _header = new BehaviorSubject<Header>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get header(): Header {
    return this._header.value
  }

  set header(header: Header){
    this._header.next(header)
  }
}
