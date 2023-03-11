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
   nacionalidadUsuario     = true;
  //  textoDeRegistro      = "No existen usuarios Registrados";
  generoUsuario            = "Seleccione su Genero o Sexo"
   

  // funciones
   getregistroUsuario(){
    
    this.usuarioRegistrado = false;
   }

/* 
   setUsuarioRegistrado() {
     alert("EL USUARIO SE ACABA DE REGISTRAR");
     this.textoRegistro = "EL USUARIO SE ACABA DE REGISTRAR";
   }  */

/* 
   setTextoRegistro(event:Event){
    
     
    // alert(event.target+"MI OBJETO");

    if((<HTMLInputElement>event.target ).value=="si"){
       this.textoDeRegistro = "El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro =  "No existen usuarios Registrados";
    }

    
    
    
   } */


   setGeneroUsuario(event:Event){

    // alert(event.target+ "Mi Objeto")

    if((<HTMLInputElement>event.target).value == "Masculino"){
      this.generoUsuario = "El genero o sexo Seleccionado fue Masculino"
    }else{
      this.generoUsuario = "El genero o sexo Seleccionado fue Femenino"
    }

   }


  setNacionalidadUsuario(){
    this.nacionalidadUsuario
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
