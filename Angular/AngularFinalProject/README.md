# AngularFinalProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

Steps for installing and generating

0. If angular isn't already installed run cmd 'npm install -g @angular/cli'
1. Create project folder Run cmd 'ng new AngularFinalProject'
2. Load npm files run cmd 'npm install'
3. Install typescript run cmd 'npm install typescript@2.8 --save-dev'
4. Install rxjs run cmd 'npm install rxjs'
5. Install mock json server run cmd 'npm install -g json-server'
6. create mockdb.json which will hold the tasks
7. generate task class 'ng generate class shared/models/task '
8. generate task module 'ng g m modules/task'
9. generate componet 'ng generate component modules/task/components/modify-tasks'
10. modify tsconfig.json "compilerOptions": to have
	- "strictPropertyInitialization": false
	- "noImplicitReturns": false
11. generate componet 'ng generate component modules/task/components/modify-task
12. generate componet 'ng generate component modules/task/components/create-task
