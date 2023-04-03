import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { Response } from "../models/response";
import { User } from "../models/user";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})

export class ApiAuthService{
    url:string = 'https://localhost:7044/api/';
    uri:string = 'User/login';

    private currentUserSubject!: BehaviorSubject<User | null>;

    constructor(private _http: HttpClient){
        const storedUser = localStorage.getItem('currentUser');
        this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    }

    public get userData(): User | null{
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<Response>{
        return this._http.post<Response>(`${this.url}${this.uri}`, {email, password}, httpOptions).pipe(
            map(res => {
                if(res.success===1){
                    const user: User = res.data;
                    localStorage.setItem('user', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return res;
            })
        );
    }

    logout(){
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }
}