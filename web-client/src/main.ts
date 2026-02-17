import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderCompoenent } from './app/components/header/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));