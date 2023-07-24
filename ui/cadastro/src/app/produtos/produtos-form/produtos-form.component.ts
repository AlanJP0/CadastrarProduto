import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    standalone: true,
    template: 
    `<div class="modal-header">
            <h4 class="modal-title">Adicionar Produto</h4>
            <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
        </div>
        <div class="modal-body">
        <form>
            <div class="mb-3">
                <label for="nome">Nome</label>
                <div class="input-group">
                    <input
                        id="nome"
                        class="form-control"
                        placeholder="Nome do produto"
                        name="nome"
                    />
                </div>
            </div>
            <div class="mb-3">
            <label for="nome">Nome</label>
            <div class="input-group">
                <input
                    id="nome"
                    class="form-control"
                    placeholder="Nome do produto"
                    name="nome"
                />
            </div>            <div class="mb-3">
            <label for="nome">Nome</label>
            <div class="input-group">
                <input
                    id="nome"
                    class="form-control"
                    placeholder="Nome do produto"
                    name="nome"
                />
            </div>
        </div>
        </div>
        </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.dismiss('Cross click')">CADASTRAR</button>
        </div>`
    ,
})
export class NgbdModalContent {
    @Input() name: any;

    constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produtos: any;

  constructor(private modalService: NgbModal) {
    
  }

  ngOnInit(): void {
  }

  add() {
    const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';

  }
  cadastrar(){

  }
}