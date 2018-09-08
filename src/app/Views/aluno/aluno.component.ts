import { Paginator } from './../../models/paginator.model';
import { Aluno } from './../../models/aluno';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Page } from '../../models/page';

@Component({
  selector: 'alu-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public alunos: Array<Aluno> = [];
  public page: Page;

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.pageAlunos(0, 10);
  }

  pageAlunos(page, size) {
    this.alunoService.getAlunoPagina(page, size).subscribe(response => {
      this.page = response;
      this.alunos = this.page.results;
    });

  }

  changePage(event) {
   this.pageAlunos(event.page, event.size);
  }

}
