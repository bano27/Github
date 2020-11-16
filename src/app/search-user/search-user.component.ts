import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { GithubUser } from "../github-user";
import { Search } from "../search";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  userDetails: GithubUser;
  public githubUser: any = [];

  constructor(private gitUserService:UsersService) { }

  ngOnInit() {
    this.gitUserService.githubUser('bano27');
    this.githubUser = this.gitUserService.userDetails;
    console.log(this.githubUser);
    }

  newUser(a){
    this.gitUserService.githubUser(a);
    this.githubUser = this.gitUserService.userDetails;
  }
}
