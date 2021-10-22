//Import input, output, eventEmitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.scss']
})
export class ModifyTaskComponent implements OnInit {
  @Input() task: Task;
  //Task delete, find the task by ID which is of type number
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  
  onClickDelete(){
    //Send the task id
    this.taskDeleted.emit(this.task.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
