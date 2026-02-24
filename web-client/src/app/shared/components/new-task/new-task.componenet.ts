import { Component, output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-task.componenet.html',
  styleUrl: './new-task.componenet.css',
})
export class NewTaskComponenet {

  cancel = output<void>();

  protected enteredTitle = signal<string>('');
  protected enteredSummary = signal<string>('');
  protected enteredDueDate = signal<string>('');

  onCancel(): void {
    this.cancel.emit();
  }

}
