import { Component, OnInit } from '@angular/core';
//import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/shared/models/task';
import { ModifyTasksComponent } from '../modify-tasks/modify-tasks.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public newTask: Task = new Task();
  private taskRoute = 'http://localhost:3000/tasks';
  public tasks: Task[] = Array<Task>();
  //used for http
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, public modifyTasksComponent: ModifyTasksComponent) {}

  onClickCreate(){
    //Check to see if there is data in the task form
    if(this.newTask.name == undefined || 
        this.newTask.description == undefined ){
      //Clear the null data
      this.newTask = new Task();
      console.log('Null Information: ', this.newTask);
    }
    //if there is data, then load it
    else{
      this.http.get<Task[]>(this.taskRoute).subscribe(
        tasks => {
          //load the tasks currently in the database
          this.tasks = tasks as Task[];
          //Set the new id
          if(this.tasks.length == 0){
            this.newTask.id = 1;
          }
          else{
            this.newTask.id = this.tasks.length + 1;
          }
      });
      //Set the format of the body
      const body = { 
        "id": this.newTask.id,
        "name": this.newTask.name,
        "description": this.newTask.description
      }
      //in order for the task to post and display onto the screen we need to first post and then when the request is complete, refresh the page
      this.http.post<Task[]>(this.taskRoute, body, this.httpOptions).subscribe(wait => {window.location.reload();});
      this.newTask = new Task();
    }
  }

  ngOnInit() {
  }

}
