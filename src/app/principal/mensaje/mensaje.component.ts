import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {
  enviado = false;
  info: string = "";
  // constructor() { }

  EnviarMensaje() {
    alert('mensaje enviado: ' + this.info);
    this.enviado = true;
  }

  PermitirSalirDeRuta(): boolean | Observable<boolean> | Promise<boolean> 
  {
    //si hay algo escrito y no ha sido enviado, preguntar
    if (this.info.trim().length>0 && this.enviado == false){

      const confirmacion = window.confirm('Tu mensaje no ha sido enviado! perderás todos los cambios que no hayas guardado');
      return confirmacion;
    }

    else return true; //sal de la ruta sin problemas
    
    /* const confirmacion = window.confirm('Tu mensaje no ha sido enviado! perderás todos los cambios que no hayas guardado');
    return confirmacion; */
  }

  constructor(private clipboard:ClipboardService){}
  CopiarTexto(){
    this.clipboard.copyFromContent(this.info);
  }

}
