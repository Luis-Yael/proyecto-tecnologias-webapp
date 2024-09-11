import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit{
  public type: string = "password";
  public username:string = "";
  public password:string = "";

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public login(){

  }

  public registrar(){
    this.router.navigate(["registro-usuarios"]);
  }

  public showPassword(){
    if(this.type == "password"){
      $("#show-password").addClass("show-password");
      $("#show-password").attr("data-password", true);
      this.type = "text";
    }else if(this.type == "text"){
      $("#show-password").removeClass("show-password");
      $("#show-password").attr("data-password", false);
      this.type = "password";
    }
  }
}
