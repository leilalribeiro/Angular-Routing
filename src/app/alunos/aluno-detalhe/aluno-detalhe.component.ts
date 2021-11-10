import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  //variavel para obter os detalhes do aluno e fazer a saida no template(interpolaçao)
  aluno: any;
  inscricao: Subscription | any;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService) { }

  ngOnInit() {
    /*this.inscricao= this.route.params.subscribe(
      (params: any) => {
        let id= params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );*/

    this.inscricao = this.route.data.subscribe(
      (info: any) : void=>{
        this.aluno = info.aluno;
      }
    );

  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(){
    //quando destroi um componente a inscricao ainda pode ficar ativa 
    //entao é boa pratica colocar ngOnDestroy, unsubscribe 
    this.inscricao?.unsubscribe();
  }
}