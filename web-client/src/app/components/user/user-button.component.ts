import { Component, Input, input, computed } from '@angular/core';

@Component({
  selector: 'user-button',
  standalone: true,
  templateUrl: './user-button.component.html',
  styleUrl: './user-button.component.css',
})
export class UserButtonComponent {
  
  // Define element property using @Input decorator
  @Input({
    required: true
  })
  public avatar!: string;

  // Public function to create the user-image path
  public get imagePath() {
    return `/users/${this.avatar}`;
  }

  // Define element property using input & computed Signal
  name = input.required<string>(); // input signal: read-only
  public altStatement = computed(
    () => { return `Avatar of ${this.name()}` }
  ); // computed signal

  public onSelectUser() {} // pass
}
