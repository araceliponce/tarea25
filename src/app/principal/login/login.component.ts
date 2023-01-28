import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AutenticacionService,
    private router: Router) { }

  routeRedirect = '';

  nom = '';

  login() {
    if(this.nom.toLowerCase()=='araceli'){
    this.authService.login();
    this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
    this.authService.urlUsuarioIntentaAcceder = '';
    this.router.navigate([this.routeRedirect]);
    }
    else{
      alert('datos de acceso incorrectos')
    }
  }

  ngOnInit() {
    
  }
}
