import { Component, computed, input } from '@angular/core';

import { type User } from '../../../core/models/user.model';
import { DUMMY_TASKS } from '../../../testing/mocks/task.mock';

import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ TaskDetailComponent ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  
  protected readonly tasks = DUMMY_TASKS;
  
  user = input.required<User>();

  protected selectedUserTasks = computed(
    () => this.tasks.filter(
      task => task.userId === this.user().id
    )
  )

}