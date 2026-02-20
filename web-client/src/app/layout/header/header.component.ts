import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // otherwise (if only header) it'll override the <header> element of HTML
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
