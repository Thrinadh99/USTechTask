import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DuplicateComponent } from './duplicate/duplicate.component';
import { PollingComponent } from './polling/polling.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { path: 'duplicate', component: DuplicateComponent },
  { path: 'polling', component: PollingComponent},
  { path: 'theme', component: ThemeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'duplicate' },
  { path: '**', redirectTo: 'duplicate' }
];

@NgModule({
  declarations: [
    AppComponent,
    DuplicateComponent,
    PollingComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
