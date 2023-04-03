import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../services/apiauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email!: string;
  password!: string;

  constructor(public apiAuthService:ApiAuthService, private _route: Router){
    if(this.apiAuthService.userData){
      this._route.navigate(['/']);
    }
  }

  ngOnInit(): void {      
  }

  login(){
    this.apiAuthService.login(this.email, this.password).subscribe(response =>{
      if(response.success == 1){
        this._route.navigate(['/']);
      }
    });
  }
}
