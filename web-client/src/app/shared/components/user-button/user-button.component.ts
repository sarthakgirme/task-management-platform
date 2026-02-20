import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-user-button',
  standalone: true,
  templateUrl: './user-button.component.html',
  styleUrl: './user-button.component.css',
})
export class UserButtonComponent {

  // Define class properties using Signals: call Signal as Method; not Property/Variable
  avatar = input.required<string>();
  name = input.required<string>();
  userId = input.required<string>();
  
  imagePath = computed(
    () => { return `/users/${this.avatar()}` }
  );
  altStatement = computed(
    () => { return `Avatar of ${this.name()}` }
  );

  // Define output event emitter
  selectUser = output<string>();

  onSelectUser() {
    this.selectUser.emit(this.name());
  }
}
