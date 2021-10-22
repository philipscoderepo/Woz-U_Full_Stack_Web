import { Component, OnInit } from '@angular/core';
//import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-modify-tasks',
  templateUrl: './modify-tasks.component.html',
  styleUrls: ['./modify-tasks.component.scss']
})
export class ModifyTasksComponent implements OnInit {
  private taskRoute = 'http://localhost:3000/tasks';
  public tasks: Task[] = Array<Task>();
  public tasksO: Observable<Task>;
  //used for http
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getTasks(){
    this.http.get<Task[]>(this.taskRoute).subscribe(
      tasks => {
        this.tasks = tasks as Task[];
    });
  }

  async deleteItem(id: number): Promise<any>{
    //(add the id of the item that we want to delete to the url) 
    return this.http.delete<Task[]>(this.taskRoute + '/' + id).toPromise();
  }

  async addItem(task: Task){
    const body = { 
      "id": task.id,
      "name": task.name,
      "description": task.description
    }
    console.log("Adding: ",task);
    return this.http.post<Task[]>(this.taskRoute, body, this.httpOptions).toPromise();
  }

  async modifyTasksArray(taskIdForDelete: number): Promise<any>{
    //load the tasks from the database
    var result = await this.http.get<Task[]>(this.taskRoute).toPromise();
    result.map(task => this.tasks as Task[]);
    console.log("in getObservable", this.tasks);

    for(let task of this.tasks) {
      //clear the database 
      await this.deleteItem(task.id);
    }
    //remove the task we want to delete
    this.tasks.splice(taskIdForDelete - 1, 1);

    console.log("tasks array after for loop delete: ", this.tasks);
    //Add the tasks back into the database and update the id's for each task
    let index = 1;
    for(let task of this.tasks){
      task.id = index;
      await this.addItem(task);
      index++;
    }
    return result;
  }

  //Remove the task from the list of tasks
  onTaskDeleted(taskId: number){
    this.modifyTasksArray(taskId);
  }

  ngOnInit(){
    this.getTasks();
  }

}
