import { Injectable } from "@angular/core";
import { Router,CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { ApiAuthService } from "../services/apiauth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{

    constructor(private _route: Router, private _apiAuthService: ApiAuthService){
    }

    canActivate(route: ActivatedRouteSnapshot){
        const user = this._apiAuthService.userData;
        if(user){
            return true;
        }
        this._route.navigate(['login']);
        return false;
    }
}