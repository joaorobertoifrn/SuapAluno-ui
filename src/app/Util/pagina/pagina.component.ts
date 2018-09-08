import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alu-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  private size = 10;

  private page;

  @Input('page') public set value(page: any) {
      if (!page) { return; }
      this.page = page;
      this.setPagetion();
  }

  @Output() public  paginationEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  changePage(page?) {
      setTimeout(() => {
          this.paginationEvent.emit({page: page ? page : 0, size: this.size} );
      });
  }

  setPagetion() {
      const pages = new Array<number>();
      const inc =  (this.page.number - 2) <= 0 ? (4 - this.page.number) : 2;
      const dec =  (this.page.number + 2) >= this.page.totalPages ? (5 - (this.page.totalPages - this.page.number)) : 2;
      const inicio = (this.page.number - dec) <= 0 ? 0 : (this.page.number - dec);
      const fim = (this.page.number + inc) < this.page.totalPages ? (this.page.number + inc) : (this.page.totalPages - 1);
      for (let i = inicio; i <= fim; i++) {
          pages.push(i);
      }
      this.page.pages = pages;
  }
}
