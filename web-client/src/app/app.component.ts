import { Component, signal } from '@angular/core';

import { HeaderCompoenent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true, 
    imports: [HeaderCompoenent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {}