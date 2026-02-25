import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from '../../../../core/models/task.model';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  userId = input.required<string>();
  close = output<void>();

  constructor (protected taskService: TaskService) {}

  protected enteredTitle = signal<string>('');
  protected enteredSummary = signal<string>('');
  protected enteredDueDate = signal<string>('');

  onCloseEvent() :void {
    this.close.emit();
  }

  onSubmitEvent() :void {
    
    this.taskService.addTask(this.userId(), {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate()
    });
    // Close pop-up of current component
    this.close.emit();
  }

}
