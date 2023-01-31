import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CreatePostComponent } from './create-post/create-post.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // {path:'createPost' , component:CreatePostComponent},
  {path:'' , component:TaskListComponent},
  {path:'details', component:HeaderComponent},
  // {path:'', redirectTo:'/createPost' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [TaskListComponent
                                ];
