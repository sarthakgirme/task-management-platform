import { Component, input, computed } from '@angular/core';

import { type User } from '../../../../core/models/user.model';
import { type NewTask } from '../../../../core/models/task.model';
import { DUMMY_TASKS } from '../../../../testing/mocks/task.mock';
import { TaskService } from '../../../../core/services/task.service';

import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ TaskDetailComponent, NewTaskComponent ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  
  user = input.required<User>();
  protected isAddingTask: boolean = false;

  constructor(private taskService: TaskService) {}
  

  protected selectedUserTasks = computed(
    () => this.taskService.getTaskByUserId(this.user().id)()
  );

  protected onStartAddTaskEvent(): void {
    this.isAddingTask = true;
  }

  protected onCloseAddTaskEvent(): void {
    this.isAddingTask = false;
  }
  
}