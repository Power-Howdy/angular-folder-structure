import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Project, ProjectService } from '@app/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {
  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.projectService.getSingle(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}