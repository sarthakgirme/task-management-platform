import { Component } from '@angular/core';

import { UserService } from './core/services/user.service';

import { HeaderComponent } from './layout/header/header.component';
import { UserButtonComponent } from './layout/sidebar/user-button/user-button.component';
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';

@Component({
    selector: 'app-root',
    standalone: true, 
    imports: [HeaderComponent, UserButtonComponent, TaskListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(protected userService: UserService) {}

    onSelectUser(userId: string): void {
        this.userService.selectUser(userId);
    }
}