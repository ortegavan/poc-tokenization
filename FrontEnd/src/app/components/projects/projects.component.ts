import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [] as Project[];
  recents = [] as Project[];

  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.service.get().subscribe((projects) => {
      this.projects = projects;
      this.recents = _.sortBy(this.projects, ['accessed'])
        .reverse()
        .slice(0, 4);
    });
  }
}
