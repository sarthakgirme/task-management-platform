import { Injectable, signal, computed } from "@angular/core";

import { type User } from "../models/user.model";
import { DUMMY_USERS } from "../../testing/mocks/user.mock";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private users = signal<User[]>(DUMMY_USERS);
    private selectedUserId = signal<string | undefined>(undefined);

    readonly allUsers = this.users.asReadonly();

    readonly selectedUser = computed(
        () => this.users().find(user => user.id === this.selectedUserId())
    );

    selectUser(userId: string): void {
        this.selectedUserId.set(userId);
    }
}