import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import {Response} from '../models/response';

const httpOption ={
  Headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
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

  addClient(client:Client):Observable<Response>{
    return this._http.post<Response>(`${this.url}${this.uri}`,client);
  }

}
