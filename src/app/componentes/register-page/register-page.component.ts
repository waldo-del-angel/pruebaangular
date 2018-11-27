import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(public registrar : AuthService) { }

  ngOnInit() {
  }

  onSubmitAddUser():void {
    this.registrar.registroUsuario(this.email, this.password).
    then((datosUsuario) =>{
      console.log('exito');
      console.log(datosUsuario);
    }).catch( (error) => {
      console.log('error');
      console.log(error);
    });
  }
}
