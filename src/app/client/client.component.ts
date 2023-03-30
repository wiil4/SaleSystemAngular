import { Component } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  //lst!: any[];
  dataSource!: Response[];
  columnName: string[] = ['id','name'];
  constructor(private _apiClient: ApiClientService){    
  }

  ngOnInit():void{
    this.getClients();
  }

  getClients(){
    this._apiClient.getClient().subscribe(response =>{
      console.log(response);
      //this.lst = response.data;
      this.dataSource = response.data;
    });
  }
}
