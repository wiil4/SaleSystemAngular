import { Component } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';
import { Response } from '../models/response';
import { DialogClientComponent } from '../dialog-client/dialog-client.component';
import { MatDialog } from '@angular/material/dialog';
import { Client } from '../models/client';
import { DialogDeleteComponent } from '../common/delete/dialog-delete/dialog-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent {
  //lst!: any[];
  snackTime:number=2;
  readonly dialogWidth: string = '300px';
  clientsData!: Response[];
  columnName: string[] = ['id','name','actions'];

  constructor(private _apiClient: ApiClientService,
    public dialog:MatDialog, private _snackBar: MatSnackBar){    
  }

  ngOnInit():void{
    this.getClients();
  }

  getClients(){
    this._apiClient.getClient().subscribe(response =>{
      this.clientsData = response.data;
    });
  }
  
  openAdd(){
    const dialogRef = this.dialog.open(DialogClientComponent,{
      width: this.dialogWidth,
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getClients();
    });
  }

  openEdit(client:Client){
    const dialogRef = this.dialog.open(DialogClientComponent,{
      width: this.dialogWidth,
      data: client,
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getClients();
    });
  }

  openDelete(id:number){
    const dialogRef = this.dialog.open(DialogDeleteComponent,{
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this._apiClient.deleteClient(id).subscribe(res=>{          
          this._snackBar.open('Client correctly deleted!','',{
            duration: this.snackTime * 1000
          });
          this.getClients();
        });
      }
    });
  }
}
