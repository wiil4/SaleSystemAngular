import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from '../models/client';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-dialog-client',
  templateUrl: './dialog-client.component.html',
  styleUrls: ['./dialog-client.component.css']
})
export class DialogClientComponent {
  name!:string;

  constructor(public dialogRef: MatDialogRef<DialogClientComponent>,
    private _apiClient: ApiClientService,
    private _snackBar: MatSnackBar){
  }

  close(){
    this.dialogRef.close();
  }

  addClient(){
    const client: Client = {name: this.name};
    this._apiClient.addClient(client).subscribe(response =>{
      if(response.success == 1){
        this.dialogRef.close();
        this._snackBar.open('Client correctly added!','',{
          duration: 3500
        });
      }
    });
  }
}
