import { Component } from '@angular/core';
import { Aluno } from '../app/modelo/aluno.model';

@Component({
  selector: 'bol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos: Aluno[] = [
  {nome:"Diego", nota:4 , aprovado:true},
  {nome:"Fred", nota:7 , aprovado:true},
  {nome:"Renan", nota:1 , aprovado:false},
  {nome:"Julio", nota:9 , aprovado:true}
  ];
  
  
}
//   nome: string = 'Mauricio'
//   alunos = ['Fabio','Douglas', 'Julia'];

//   aluno = {
//     turma: 'TI',
//     nome: 'David Santos',
//     nota: 8
//   }

//   classe = [
//     {turma: 'TI' , nome: 'David Santos' , nota: 8},
//     {turma: 'TI' , nome: 'Julio Cleiner' , nota: 4},
//     {turma: 'TI' , nome: 'Pedro Alvares' , nota: 6},
//     {turma: 'TI' , nome: 'Lucio diaz' , nota: 5},
//     {turma: 'TI' , nome: 'Fernando Lucas' , nota: 1},
//     {turma: 'TI' , nome: 'Thiago leias' , nota: 3}
//   ];

//   getMensagem (informacao: number): string {
//     if(informacao === 1){
//     return 'mensagem do metodo';
//     } else {
//       return `Mensagem com valor ${informacao}`;
//     }
//   }
// }
