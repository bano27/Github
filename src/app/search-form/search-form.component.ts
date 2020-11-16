import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from "../search";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchUser = new Search("");
  @Output() getUser = new EventEmitter<Search>();

  userGit(){
    //this.getUser.emit(this.searchUser);
    console.log(this.searchUser.name)
  }

  constructor() { }

  ngOnInit(){
  }

}
