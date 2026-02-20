import { Component} from '@angular/core';

import { HeaderComponent } from './layout/header/header.component';
import { UserButtonComponent } from './shared/components/user-button/user-button.component';
import { DUMMY_USERS } from './testing/mocks/user.mock';

@Component({
    selector: 'app-root',
    standalone: true, 
    imports: [HeaderComponent, UserButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    protected readonly users = DUMMY_USERS;
    protected selectedUserName: string = '';

    onSelectUser(userName: string): void {
        this.selectedUserName = userName;
        console.log(`Selected user with user ID: ${userName}`);
    }
}