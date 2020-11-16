import { Injectable } from '@angular/core';
import { GithubRepositories } from './github-repositories';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  newRepos : GithubRepositories;

  constructor(private http: HttpClient) {
    this.newRepos = new GithubRepositories('', '', '', new Date());
  }

  gitUsersRepositories(user){
    interface ApiResponse{
      name: string;
      html_url: string;
      description: string;
      created_at: Date;
    };
  let promise = new Promise((resolve)=>{
    this.http.get<ApiResponse>(`https://api.github.com/users/${user}?access_token=${environment.GithubAPIkey}`).toPromise().then(response=>{
      this.newRepos.name = response.name;
      this.newRepos.html_url = response.html_url;
      this.newRepos.description = response.description;
      this.newRepos.created_at = response.created_at;

      resolve()
    })
  })
  return promise;
  }
}
