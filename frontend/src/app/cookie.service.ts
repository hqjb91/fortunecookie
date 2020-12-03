import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Model
export interface CookieText {
    cookie: string;
}

@Injectable()
export class CookieService {

    constructor(private http: HttpClient){}

    async getCookies(n = 1):Promise<CookieText[]>{
        // query string
        const queryParams:HttpParams = (new HttpParams()).set("count", `${n}`);

        //const ENDPOINT:string = "http://localhost:3000/api/cookie";
        const ENDPOINT:string = "/api/cookie";

        const response = await this.http.get<any>(ENDPOINT, {params: queryParams}).toPromise();

        // Calls must match the API response
        if(n === 1)
            return [ response as CookieText ];

        return response as CookieText[];
    }
}