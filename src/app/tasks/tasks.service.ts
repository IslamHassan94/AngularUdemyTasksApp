import { Injectable } from '@angular/core';
import { type NewTaskData, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & Learn how to apply them',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2025-5-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issues template',
      summary:
        'Prepare and describe an issue template which will help in project management',
      dueDate: '2025-6-15',
    },
  ];
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      userId: userId,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
