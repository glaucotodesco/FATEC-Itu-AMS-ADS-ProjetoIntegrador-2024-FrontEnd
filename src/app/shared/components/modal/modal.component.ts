import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title!: string;
  @Input() okTextButton?: string;
  @Input() cancelTextButton?: string;
  @Input() okResult: boolean | undefined;

  @ViewChild('modal') private modalContent!: TemplateRef<ModalComponent>;

  constructor(private modalService: NgbModal) {}

  open(params: any = {}) {
    return this.modalService.open(this.modalContent, params).result;
  }

  close(): void {
    this.modalService.dismissAll(); 
  }
}
