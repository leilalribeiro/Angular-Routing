import { NgModule } from "@angular/core";

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosGuard } from "./guards/alunos.guard";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";

//import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
//import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
//import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PaginanencontradaComponent } from "./paginanencontrada/paginanencontrada.component";

//definindo as rotas //rotas simples
const appRoutes: Routes = [

    {
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
        //para que o usuario nao acesse sem estar logado/verifica se o usuario está logado
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },

    {
        path: 'alunos',
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard] //,
        //canActivateChild: [AlunosGuard]

    },
    //{ path:'cursos', component: CursosComponent },
    //rota que suporta id
    //{ path:'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    //{ path:'naoEncontrado', component: CursoNaoEncontradoComponent },
    {
        path: 'homem', component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {  path: '', redirectTo: '/home', pathMatch:'full' },

    { path: '**', component: PaginanencontradaComponent }
];

// variavel routing contem a definiçao e a configuracao das rotas no projeto


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
