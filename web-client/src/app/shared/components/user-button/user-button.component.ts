import { Component, input, output, computed } from '@angular/core';

import { type User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-button',
  standalone: true,
  templateUrl: './user-button.component.html',
  styleUrl: './user-button.component.css',
})
export class UserButtonComponent {
  
  user = input.required<User>();
  isSelected = input.required<boolean>();
  selectedUser = output<string>();
  
  protected imagePath = computed(
    () => { return `/users/${this.user().avatar}` }
  );

  protected altStatement = computed(
    () => { return `Avatar of ${this.user().name}` }
  );

  protected onSelectUser() {
    this.selectedUser.emit(this.user().id);
  }

}