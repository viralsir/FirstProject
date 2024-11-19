import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {Child1Component} from './child1/child1.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
