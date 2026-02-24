import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from '../../../../core/models/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  cancel = output<void>();
  add = output<NewTask>();

  protected enteredTitle = signal<string>('');
  protected enteredSummary = signal<string>('');
  protected enteredDueDate = signal<string>('');

  onCancel() :void {
    this.cancel.emit();
  }

  onSubmit() :void {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate()
    });
  }

}
