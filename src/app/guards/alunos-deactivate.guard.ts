import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


import { IFormCanDeactivate } from "./iform-candeactivate";


@Injectable()
                                                           //qual caminho quero desativar
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {


  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

    console.log('guarda de desativação');
    //return component.podeMudarRota();
    
    return component.podeDesativar();
  
  }
}
