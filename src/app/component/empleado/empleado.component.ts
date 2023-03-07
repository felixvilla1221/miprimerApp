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
   


   getregistroUsuario(){
    
    this.usuarioRegistrado = false;
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
