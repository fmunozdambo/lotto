// login.component.ts

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackService } from "../shared/services/back.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {

  constructor(backService : BackService, public router: Router) {
  }

}