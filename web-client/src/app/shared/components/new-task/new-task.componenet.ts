import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.componenet.html',
  styleUrl: './new-task.componenet.css',
})
export class NewTaskComponenet {

  cancel = output<void>();

  onCancel(): void {
    this.cancel.emit();
  }

}
