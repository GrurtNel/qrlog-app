import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditorModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    EditorModule
  ],
  declarations: []
})
export class SharedModule { }
