import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/Projects';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent{
  @Input() project!: Project;
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService){}

  hi(){
    console.log('hi');
  }
  openProjectModal(){
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project,
      }
    }
    this.modalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }



 
}
