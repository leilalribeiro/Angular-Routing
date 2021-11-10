import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';

mostrarMenu: boolean= false;

constructor(private authSertice: AuthService){

}

ngOnInit(){
this.authSertice.mostrarMenuEmitter.subscribe(
 mostrar => this.mostrarMenu = mostrar
);
}

}
