import { Task } from "../../core/models/task.model";

export const DUMMY_TASKS: Task[] = [
    {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31'
    },
    {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31'
    },
    {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
        'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15'
    },
    {
        id: 't4',
        userId: 'u0',
        title: 'Design system proposal',
        summary: 'Create a proposal for the new design system including color palette & components.',
        dueDate: '2025-08-14'
    },
    {
        id: 't5',
        userId: 'u0',
        title: 'Refactor authentication module',
        summary: 'Improve structure & performance of the authentication flow.',
        dueDate: '2025-04-20'
    },
    {
        id: 't6',
        userId: 'u1',
        title: 'Write Unit Tests for Angular App',
        summary: 'Ensure at least 80% code coverage across all modules.',
        dueDate: '2025-10-10'
    },
    {
        id: 't7',
        userId: 'u1',
        title: 'Optimize API Response Handling',
        summary: 'Improve error handling and loading state management.',
        dueDate: '2026-01-12'
    },
    {
        id: 't8',
        userId: 'u2',
        title: 'Create CI/CD Pipeline',
        summary: 'Set up automated build & deploy pipelines on GitHub Actions.',
        dueDate: '2025-03-01'
    },
    {
        id: 't9',
        userId: 'u2',
        title: 'Update Documentation',
        summary: 'Revise setup instructions and API reference guide.',
        dueDate: '2025-06-22'
    },
    {
        id: 't10',
        userId: 'u3',
        title: 'Sprint Planning',
        summary: 'Prepare backlog items and estimations for Sprint 12.',
        dueDate: '2025-02-28'
    },
    {
        id: 't11',
        userId: 'u4',
        title: 'QA Testing for Release 1.5',
        summary: 'Perform smoke testing, regression testing, and log issues.',
        dueDate: '2025-07-18'
    },
    {
        id: 't12',
        userId: 'u4',
        title: 'Automate test scripts',
        summary: 'Write Cypress scripts for critical user journeys.',
        dueDate: '2025-09-05'
    },
    {
        id: 't13',
        userId: 'u5',
        title: 'Database Schema Review',
        summary: 'Analyze and optimize the schema for performance bottlenecks.',
        dueDate: '2025-11-10'
    },
    {
        id: 't14',
        userId: 'u5',
        title: 'Migrate to PostgreSQL 16',
        summary: 'Perform migration and ensure backward compatibility.',
        dueDate: '2026-03-25'
    }
]