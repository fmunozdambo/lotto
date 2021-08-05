// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";

import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class BackService {
  cookies: any;
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post("/back/auth", user);
  }
  register(user: User): Observable<any> {
    return this.http.post("/back/users", user);
  }
  setToken(token: String) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser(id: number){
    return this.http.get("/back/users/" + id);
  }
}