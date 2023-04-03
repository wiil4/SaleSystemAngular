import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email!: string;
  password!: string;

  constructor(public apiAuth:ApiAuthService){

  }

  ngOnInit(): void {
      
  }

  login(){
    this.apiAuth.login(this.email, this.password).subscribe(response =>{
      console.log(response);
    })
  }
}
