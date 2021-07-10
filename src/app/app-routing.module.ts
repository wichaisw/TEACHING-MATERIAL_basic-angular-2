import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ToDoListComponent } from './modules/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', 
    redirectTo: '/login',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
