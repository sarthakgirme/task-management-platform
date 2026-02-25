import { Injectable, signal, computed, Signal } from "@angular/core";

import { type Task, NewTask } from "../models/task.model";
import { DUMMY_TASKS } from "../../testing/mocks/task.mock";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    
    private tasks = signal<Task[]>(DUMMY_TASKS);

    // Expose read-only signal
    readonly allTasks = this.tasks.asReadonly();

    getTaskByUserId(userId: string) :Signal<Task[]> {
        return computed(
            () => this.tasks().filter(task => task.userId === userId)
        );
    }

    addTask(userId: string, newTask: NewTask) :void {
        this.tasks.update(currentTasks => [ ...currentTasks, {
                id: new Date().getTime().toString(),
                userId: userId,
                ...newTask
            }
        ]);
    }

    removeTask (taskId: string) :void {
        this.tasks.update(
            currentTasks => currentTasks.filter(task => task.id !== taskId)
        );
    }

}