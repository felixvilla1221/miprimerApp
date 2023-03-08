import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

 //Nombre     = ' Felix';
 
 //Apellido   =  ' Villamizar';

 //Edad       =  1;

 //Empresa    =  ' ThomasGreg';




// Creacion de Propiedad Binding
   habilitarCuadroEdad     = true;
   habilitarCuadroNombre   = true;
   habilitarCuadroApellido = true;
   habilitarCuadroEmpresa  = true;
   usuarioRegistrado       = false;
   textoRegistro           = " No existen usuarios Registrados ";
   textoRegistro2          = " No existe usuarios Registrados";

  // funciones
   getregistroUsuario(){
    
    this.usuarioRegistrado = false;
   }


   /* setUsuarioRegistrado() {
    alert("EL USUARIO SE ACABA DE REGISTRAR");
   } */


   setTextoRegistro(){
    this.textoRegistro = "EL USUARIO SE ACABA DE REGISTRAR";
   }


   setTextoRegistro2(){
    this.textoRegistro2 = " No existe Usuarios Registrados ";
   }




 
constructor(){
  
 }

 

 ngOnInit(): void {
   
 }



 llamarEmpresa(value:string){

 }
 
 
 llamarNombre(value:string){
 
 }
 
 
 llamarApellido(value:string){
 
 }
 
  llamarEdad(valor:number){
 
  }

}
