import { Component, input, computed, signal } from '@angular/core';

import { type User } from '../../../core/models/user.model';
import { type NewTask } from '../../../core/models/task.model';
import { DUMMY_TASKS } from '../../../testing/mocks/task.mock';

import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { NewTaskComponenet } from '../new-task/new-task.componenet';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ TaskDetailComponent, NewTaskComponenet ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  
  protected tasks = signal(DUMMY_TASKS);
  
  user = input.required<User>();

  protected selectedUserTasks = computed(
    () => this.tasks().filter(
      task => task.userId === this.user().id
    )
  )

  protected onCompleteEvent(taskId: string) :void {
    this.tasks.update(
      currentTasks => currentTasks.filter(
        task => task.id !== taskId
      )
    );
  }

  protected isAddingTask: boolean = false;
  protected onStartAddTaskEvent() :void {
    this.isAddingTask = true;
  }
  protected onCancelAddTaskEvent() : void {
    this.isAddingTask = false;
  }

  protected onAddEvent(newTask: NewTask) :void {
    
    this.tasks.update(
      currentTask => [ ...currentTask, {
          id: new Date().getTime().toString(),
          userId: this.user().id,
          title: newTask.title,
          summary: newTask.summary,
          dueDate: newTask.dueDate
        }
      ]
    );

    // Close pop-up of AddTaskComponenet
    this.isAddingTask = false; 
  }

}