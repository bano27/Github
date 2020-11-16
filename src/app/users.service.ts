import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GithubUser } from "./github-user";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userDetails: GithubUser;

  constructor(private http:HttpClient) {
    this.userDetails = new GithubUser('', '', '', 0, '', new Date(), 0, 0);
  }

  githubUser(user){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url: string;
      public_repos: number;
      html_url: string;
      created_at: Date;
      followers: number;
      following: number;
    };
  let promise = new Promise((resolve)=>{
    this.http.get<ApiResponse>(`https://api.github.com/users/${user}?access_token=${environment.GithubAPIkey}`).toPromise().then(response=>{
      this.userDetails.name = response.name;
      this.userDetails.login = response.login;
      this.userDetails.avatar_url = response.avatar_url;
      this.userDetails.public_repos = response.public_repos;
      this.userDetails.html_url = response.html_url;
      this.userDetails.created_at = response.created_at;
      this.userDetails.followers = response.followers;
      this.userDetails.following = response.following;

      resolve()
    })
  })
  return promise;
  }
}
