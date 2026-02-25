import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from '../../../../core/models/task.model';
import { TaskService } from '../../../../core/services/task.service';

import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [ CardComponent, DatePipe ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent {

  task = input.required<Task>();

  constructor(protected taskService: TaskService) {}

  protected onCompleteTask() {
    this.taskService.removeTask(this.task().id);
  }
  
}