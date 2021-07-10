import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonPlaceholderRoutingModule } from './json-placeholder-routing.module';
import { JsonPlaceholderComponent } from './json-placeholder.component';


@NgModule({
  declarations: [
    JsonPlaceholderComponent
  ],
  imports: [
    CommonModule,
    JsonPlaceholderRoutingModule
  ]
})
export class JsonPlaceholderModule { }
