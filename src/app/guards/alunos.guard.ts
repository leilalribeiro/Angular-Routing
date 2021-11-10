import { Injectable } from "@angular/core"


import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable } from "rxjs"



@Injectable()
export class AlunosGuard implements CanActivateChild {
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ) : Observable<boolean>|boolean{


            //console.log(route);
            //console.log(state);

           
        return true;
    }
}