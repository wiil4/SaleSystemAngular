import { Component } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';
import { Response } from '../models/response';
import { DialogClientComponent } from '../dialog-client/dialog-client.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  //lst!: any[];
  clientsData!: Response[];
  columnName: string[] = ['id','name'];

  constructor(private _apiClient: ApiClientService,
    public dialog:MatDialog){    
  }

  ngOnInit():void{
    this.getClients();
  }

  getClients(){
    this._apiClient.getClient().subscribe(response =>{
      //console.log(response);
      //this.lst = response.data;
      this.clientsData = response.data;
    });
  }
  
  openAdd(){
    const dialogRef = this.dialog.open(DialogClientComponent,{
      width: '300',
      height: '350'
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getClients();
    });
  }
}
