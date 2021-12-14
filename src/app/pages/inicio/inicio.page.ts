import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';


interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes : Componente[] =[
    {
      icon: 'heart-circle-outline',
      name: 'Mapa Satelital',
      redirecTo: '/donaciones'
    },

    {
      icon: 'save',
      name: 'Registrarse',
      redirecTo: '/register'
    },

    {
      icon: 'person',
      name: 'Conductores Destacados',
      redirecTo: '/donadores'
    },
    {
      icon: 'person',
      name: 'Direcciones',
      redirecTo: '/datos'
    },
    {
      icon: 'person',
      name: 'Cerrar Sesion',
      redirecTo: '/login'
    }

   
  ]
  constructor(private menuController: MenuController, private authSvc: AuthService) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
