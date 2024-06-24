import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  @Input() task?: Task;

  constructor(private taskService: TaskService) {}

  updateTask() {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe();
    }
  }
}
