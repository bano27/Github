import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUserComponent } from "./search-user/search-user.component";
import { RepositoriesComponent } from "./repositories/repositories.component";

const routes: Routes = [
  { path: 'search-user', component: SearchUserComponent },
  { path: 'repositories', component: RepositoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
