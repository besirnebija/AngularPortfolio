import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Projects';
import { Tag } from '../models/Tag';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  projects!: Project[];

  constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('Besir Nebija - Portfolio');
  }
  
  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }
}
