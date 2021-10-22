import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import the formsModule
import { FormsModule } from '@angular/forms';
//import the httpclientmodule
import { HttpClientModule } from '@angular/common/http';
//import the modify-tasks component
import { ModifyTasksComponent } from './components/modify-tasks/modify-tasks.component';
import { ModifyTaskComponent } from './components/modify-task/modify-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  //Declare the modify-tasks componenet
  declarations: [ModifyTasksComponent, ModifyTaskComponent, CreateTaskComponent],
  //Export the modify-tasks componenet
  exports: [ModifyTasksComponent]
})
export class TaskModule { }
