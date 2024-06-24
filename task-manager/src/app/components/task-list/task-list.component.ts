import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TaskState } from '../../store/task.state';
import { Task } from '../../models/task.model';
import { LoadTasks, DeleteTask } from '../../store/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']  // Make sure it's .scss
})
export class TaskListComponent implements OnInit {
  @Select(TaskState.getTasks) tasks$: Observable<Task[]> | undefined;
tasks: any;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadTasks());
  }

  deleteTask(id: number) {
    this.store.dispatch(new DeleteTask(id));
  }

  editTask(task: Task) {
    // Implement edit navigation logic here
  }
}
