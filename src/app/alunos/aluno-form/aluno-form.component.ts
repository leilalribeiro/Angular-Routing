import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription | undefined;
  private formMudou: boolean= false;


  constructor(private route: ActivatedRoute,
    private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.inscricao= this.route.params.subscribe(
      (params: any) => {
        let id= params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(){
    //quando destroi um componente a inscricao ainda pode ficar ativa 
    //entao é boa pratica colocar ngOnDestroy, unsubscribe 
    this.inscricao?.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm ('tem certeza que deseja sair dessa página');
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }
}