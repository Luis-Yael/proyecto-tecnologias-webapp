import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../facade.service';
import { AdministradoresService } from '../administradores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent implements OnInit{

  public name_user:string = "";
  public lista_admins:any[]= [];

  constructor(
    private facadeService: FacadeService,
    private administradoresService: AdministradoresService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.name_user = this.facadeService.getUserCompleteName();

    this.obtenerAdmins();
  }

  //Obtener lista de usuarios
  public obtenerAdmins(){
    this.administradoresService.obtenerListaAdmins().subscribe(
      (response)=>{
        this.lista_admins = response;
        console.log("Lista users: ", this.lista_admins);
      }, (error)=>{
        alert("No se pudo obtener la lista de admins");
      }
    );
  }

  public goEditar(idUser: number){
    this.router.navigate(["registro-usuarios/administrador/"+idUser]);
  }

  public delete(userId: number){

  }
}
