// login.component.ts

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackService } from "../shared/services/back.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  username: string;
  email: string;
  password: string;

  backService: BackService;

  constructor(backService : BackService, public router: Router) {
    this.username = ""
    this.email = ""
    this.password = ""
    this.backService = backService
  }

  login() {
    // let user = { username: this.username, mail: this.email, password: this.password };
    // this.backService.login(user).subscribe(data => {
    //   console.log(data);
    //   this.backService.setToken(data.token);
    //   this.router.navigateByUrl("/");
    // });
    this.backService.getUser(1).subscribe(data => {
      console.log(data)
    })
  }
}