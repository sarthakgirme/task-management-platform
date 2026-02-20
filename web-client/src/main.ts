import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/layout/header/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));