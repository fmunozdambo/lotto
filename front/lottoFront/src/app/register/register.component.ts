// register.component.ts

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackService } from "../shared/services/back.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  backService: BackService;

  constructor(backService : BackService, public router: Router) {
    this.username = ""
    this.email = ""
    this.password = ""
    this.confirmPassword = ""
    this.backService = backService
  }

  register() {
    const user = { username:this.username, mail: this.email, password: this.password };
    this.backService.register(user).subscribe(data => {
      this.backService.setToken(data.token);
      this.router.navigateByUrl("/");
    });
  }
}