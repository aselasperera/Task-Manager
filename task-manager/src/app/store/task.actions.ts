import { Task } from "../models/task.model";

export class AddTask {
  static readonly type = '[Task] Add';
  constructor(public payload: Task) {}
}

export class UpdateTask {
  static readonly type = '[Task] Update';
  constructor(public payload: Task) {}
}

export class DeleteTask {
  static readonly type = '[Task] Delete';
  constructor(public id: number) {}
}

export class LoadTasks {
  static readonly type = '[Task] Load';
}
