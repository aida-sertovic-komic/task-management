# TaskManagementApp

Task Management App is an Angular application for creating, editing and viewing tasks.
The design of the application is simple and intuitive made with accessibility and responsiveness in mind. The focus was on the simplicity of creating and viewing the tasks in order to provide a good user experience in managing the tasks.

Some of the functionalities include:
- Tasks are stored and read from Local Storage, and they are sorted by priority and due date upon display
- Tasks are listed in a table with pagination
- ID, color, priority and due date are randomly generated during task creation
- Title and description are entered by user when creating a task
- All information except ID about a task can be viewed in a modal
- All information except ID can be edited in a modal
- Form validation is implemented in both creating and editing a task
- Tasks can be searched using a search input field 
- State management is implemented using RxJS Observables and BehaviorSubjects
- The design of the application is responsive
- The unit tests are written for some core functionalities in TaskService 
- Angular Material is used as a UI component library

## Get started

Follow these steps to run the project locally:
1. Clone the project by typing the command in your terminal: `git clone https://github.com/aida-sertovic-komic/task-management.git`
2. Navigate into the project root folder: `cd task/management`
3. Install the necessary dependencies by running: `npm i`
4. Run `ng serve` to start the development server
5. Navigate to `http://localhost:4200/`
6. Add your tasks and store in the table and Local Storage

Find additional and more detailed Angular CLI commands below.
<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
