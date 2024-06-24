import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTask } from '../../store/task.actions';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(new AddTask({ ...this.task, id: Date.now() })).subscribe(() => {
      this.task = { id: 0, title: '', description: '', completed: false };
    });
  }
}
