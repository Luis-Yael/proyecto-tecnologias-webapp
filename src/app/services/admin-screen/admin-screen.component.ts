import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../facade.service';
import { AdministradoresService } from '../administradores.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EliminarUserModalComponent } from 'src/app/modals/eliminar-user-modal/eliminar-user-modal.component';

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
    private router: Router,
    public dialog: MatDialog
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

  public delete(idUser: number){
    //console.log("User:", idUser);
    const dialogRef = this.dialog.open(EliminarUserModalComponent,{
      data: {id: idUser, rol: 'administrador'}, //Se pasan valores a través del componente
      height: '288px',
      width: '328px',
    });
    //Esta se ejecuta después de un evento que cierra el modal
    dialogRef.afterClosed().subscribe(result => {
      if(result.isDelete){
        console.log("Admin eliminado");
        //Recargar página
        alert("Administrador eliminado correctamente");
        window.location.reload();
      }else{
        alert("Administrador no eliminado ");
        console.log("No se eliminó el admin");
      }
    });
  }
}
