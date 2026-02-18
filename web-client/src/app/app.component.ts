import { Component} from '@angular/core';

import { HeaderCompoenent } from './components/header/header.component';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { DUMMY_USERS } from './mock-data/dummy-users';

@Component({
    selector: 'app-root',
    standalone: true, 
    imports: [HeaderCompoenent, UserButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    users = DUMMY_USERS;
    userName!: string;

    onSelectUser(userName: string) {
        console.log("Selected user with user ID: " + userName);
        this.userName = userName;
    }

    displayName() {
        return this.userName;
    }
}