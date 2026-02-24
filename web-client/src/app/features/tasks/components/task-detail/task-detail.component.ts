import { Component, input, output } from '@angular/core';

import { type Task } from '../../../../core/models/task.model';

import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [ CardComponent ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent {

  task = input.required<Task>();
  protected complete = output<string>();

  protected onCompleteTask() {
    this.complete.emit(this.task().id);
  }
  
}