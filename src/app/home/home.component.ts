import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/Projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuresProject!: Project;

  constructor(private titleService: Title, private projectServie: ProjectsService){
    this.titleService.setTitle('Besir Nebija - Home')
  }
  ngOnInit(): void {
    this.featuresProject = this.projectServie.getProjectById(0)
  }

}
