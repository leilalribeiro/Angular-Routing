import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos.component";



//definindo as rotas //rotas simples
const CursosRoutes: Routes= [
  

    { path:'', component: CursosComponent },
    { path:'naoEncontrado', component: CursoNaoEncontradoComponent },
    //rota que suporta id
    { path:':id', component: CursoDetalheComponent }
    
    
];

// variavel routing contem a definiçao e a configuracao das rotas no projeto
export const routing: ModuleWithProviders<any>= RouterModule.forChild(CursosRoutes);

@NgModule({
    imports:[RouterModule.forChild(CursosRoutes)],
    exports: [RouterModule]
    })
    export class CursosRoutingModule{}