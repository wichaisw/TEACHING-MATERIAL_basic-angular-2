import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponent } from './to-do-list.component';


@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    SharedModule,
  ]
})
export class ToDoListModule { }
