import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { AddTask, UpdateTask, DeleteTask, LoadTasks } from './task.actions';
import { tap } from 'rxjs/operators';

export interface TaskStateModel {
  tasks: Task[];
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: []
  }
})
@Injectable()
export class TaskState {

  constructor(private taskService: TaskService) {}

  @Selector()
  static getTasks(state: TaskStateModel) {
    return state.tasks;
  }

  @Action(LoadTasks)
  loadTasks(ctx: StateContext<TaskStateModel>) {
    return this.taskService.getTasks().pipe(
      tap(tasks => {
        ctx.patchState({ tasks });
      })
    );
  }

  @Action(AddTask)
  addTask(ctx: StateContext<TaskStateModel>, action: AddTask) {
    return this.taskService.addTask(action.payload).pipe(
      tap((task) => {
        const state = ctx.getState();
        ctx.patchState({
          tasks: [...state.tasks, task]
        });
      })
    );
  }

  @Action(UpdateTask)
  updateTask(ctx: StateContext<TaskStateModel>, action: UpdateTask) {
    return this.taskService.updateTask(action.payload).pipe(
      tap((task) => {
        const state = ctx.getState();
        const tasks = [...state.tasks];
        const index = tasks.findIndex(item => item.id === task.id);
        tasks[index] = task;
        ctx.patchState({ tasks });
      })
    );
  }

  @Action(DeleteTask)
  deleteTask(ctx: StateContext<TaskStateModel>, action: DeleteTask) {
    return this.taskService.deleteTask(action.id).pipe(
      tap(() => {
        const state = ctx.getState();
        ctx.patchState({
          tasks: state.tasks.filter(task => task.id !== action.id)
        });
      })
    );
  }
}
