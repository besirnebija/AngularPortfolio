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
  isCollapsed:boolean = true;

  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;
  filtering: boolean = false;


  constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('Besir Nebija - Portfolio');
  }
  
  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  filter(){
    let filteredTags: Tag[] = [];

    if(this.typescript){
      filteredTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filteredTags.push(Tag.ANGULAR)
    }
    if(this.javascript){
      filteredTags.push(Tag.JAVASCRIPT)
    }
    if(this.python){
      filteredTags.push(Tag.PYTHON)
    }
    if(this.csharp){
      filteredTags.push(Tag.CSHARP)
    }
    if(this.java){
      filteredTags.push(Tag.JAVA)
    }
    if(this.nodejs){
      filteredTags.push(Tag.NODEJS)
    }
    if(this.aspnet){
      filteredTags.push(Tag.ASPNET)
    }
    if(this.react){
      filteredTags.push(Tag.REACT)
    }

    if(this.python || this.csharp || this.java || this.angular || this.typescript || this.nodejs || this.aspnet || this.react){
      this.filtering = true
    }else{
      this.filtering = false;
    }

    this.projects = this.projectsService.getProjectsByFilter(filteredTags);
  }

  resetFilters(){
  this.typescript = false;
  this.angular = false;
  this.javascript = false;
  this.python = false;
  this.csharp = false;
  this.java = false;
  this.nodejs = false;
  this.aspnet = false;
  this.react = false;
  this.filtering = false;

  this.projects = this.projectsService.getProjects();
  }
}
