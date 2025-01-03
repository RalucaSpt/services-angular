import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskServices } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// bootstrapApplication(AppComponent,
//     { providers: [TaskServices] }
// ).catch((err) => console.error(err));

export const TaskServiceToken = new InjectionToken<TaskServices>('task-service-token');

bootstrapApplication(AppComponent,
    { providers: [{provide: TaskServiceToken, useClass: TaskServices }], }
).catch((err) => console.error(err));
