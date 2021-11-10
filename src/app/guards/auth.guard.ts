import { Injectable } from '@angular/core';

import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    //redirecionamento das rotas de forma hiperativa
    private router: Router
  ) { }


canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) : Observable<boolean> | boolean
  {
   return this.verificarAcesso();

}

private verificarAcesso(){
  if (this.authService.usuarioEstaAutenticado()){
    return true;
  }
                       //qual rota navegar
  this.router.navigate(['/login']);
  
  return false;
}

canLoad(route: Route)
  : Observable<boolean>|Promise<boolean>|boolean{

    console.log('canLoad: verificando se o usuario pode carregar cod modulo' )
    return this.verificarAcesso();

  }

  
}
