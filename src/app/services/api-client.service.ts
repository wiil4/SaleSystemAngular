import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response} from '../models/response';
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  url: string = 'https://localhost:7044/';
  uri: string = 'api/Client';

  constructor(private _http:HttpClient) { }

  getClient():Observable<Response>{
    return this._http.get<Response>(`${this.url}${this.uri}`);
  }


}
