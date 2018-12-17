import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';

import { MyModalComponent } from '../modals/my-modal.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    projects$: Observable<Project[]>;

    constructor(
        private modalService: NgbModal,
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects() {
        this.projects$ = this.projectService.getAll();
    }

    openMyModal() {
        const modalRef = this.modalService.open(MyModalComponent);
        modalRef.componentInstance.id = 1;
        modalRef.result.then((result) => {
            console.log(result);
        });
    }

}
