import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { VoteComponent } from './vote/vote.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'contact', component: ContactFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
