import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  snackTime:number = 3;

  constructor(public dialogRef: MatDialogRef<DialogClientComponent>,
    private _apiClient: ApiClientService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public client:Client){
      if(this.client!=null){
        this.name = client.name;
      }
  }

  ngOnInit(): void{
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
          duration: this.snackTime * 1000
        });
      }
    });
  }

  updateClient(){
    const clientD:Client = {name:this.name, id:this.client.id};
    //console.log(`${clientD.id}  ${clientD.name}`);
    this._apiClient.updateClient(clientD.id!, clientD).subscribe(response=>{
      if(response.success == 1){
        this.dialogRef.close();
        this._snackBar.open('Client correctly updated!','',{
          duration: this.snackTime * 1000
        });
      }
    });
  }
}
