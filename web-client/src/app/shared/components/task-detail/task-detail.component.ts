import { Component, input } from '@angular/core';

import { type Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent {

  task = input.required<Task>();

}