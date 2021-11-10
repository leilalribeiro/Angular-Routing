
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { FormsModule } from "@angular/forms";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunoDetalheResolve } from "./guards/aluno-detalhe.resolve";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AlunosRoutingModule, 
        
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent],
    providers: [
        AlunosService,
        AlunosDeactivateGuard,
        AlunoDetalheResolve
        
    ]
})
export class AlunosModule { }