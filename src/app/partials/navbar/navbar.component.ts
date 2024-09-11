import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @Input() tipo: string = "";
  @Input() rol:string ="";

  public editar: boolean = false;
  public token:string = "";

  constructor(){}

  ngOnInit(): void {

  }

  public logout(){

  }

}
