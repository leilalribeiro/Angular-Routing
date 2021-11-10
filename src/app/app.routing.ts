import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

//definindo as rotas //rotas simples
const APP_ROUTES: Routes= [
    { path:'cursos', component: CursosComponent },
    //rota que suporta id
    { path:'curso/:id', component: CursoDetalheComponent },
    { path:'login', component: LoginComponent },
    { path:'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path:'', component: HomeComponent }
];

// variavel routing contem a definiçao e a configuracao das rotas no projeto
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(APP_ROUTES);