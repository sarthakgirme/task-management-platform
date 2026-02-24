import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from './testing/mocks/user.mock';
import { HeaderComponent } from './layout/header/header.component';
import { UserButtonComponent } from './shared/components/user-button/user-button.component';
import { TaskListComponent } from './shared/components/task-list/task-list.component';

@Component({
    selector: 'app-root',
    standalone: true, 
    imports: [HeaderComponent, UserButtonComponent, TaskListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    
    protected readonly users = DUMMY_USERS;
    
    protected selectedUserId = signal<string | undefined>(undefined);
    protected selectedUser = computed(
        () => this.users.find(
            user => user.id === this.selectedUserId()
        )
    )
    
    onSelectUser(userId: string): void {
        this.selectedUserId.set(userId);
    }

}