import { Component, signal } from '@angular/core';

import { HeaderCompoenent } from './components/header/header.component';
import { UserButtonComponent } from './components/user/user-button.component';
import { DUMMY_USERS } from './mock-data/dummy-users';

@Component({
    selector: 'app-root',
    standalone: true, 
    imports: [HeaderCompoenent, UserButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    public users = DUMMY_USERS;
}