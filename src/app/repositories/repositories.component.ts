import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ReposService } from "../repo.service";
import { GithubRepositories } from '../github-repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  newRepos: GithubRepositories;
  public displayRepos: any = [];

  constructor(userRepoService: ReposService) { }

  ngOnInit(): void {
  }

  newUser(a){
    this.userRepoService.gitUsersRepositories(a);
    this.displayRepos = this.userRepoService.newRepos;
  }

}
