import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DividerComponent } from './components/divider/divider.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { InfoComponent } from './components/info/info.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { FooterComponent } from './components/footer/footer.component';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    DividerComponent,
    SchoolsComponent,
    JobsComponent,
    InfoComponent,
    SoftSkillsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SafeHtmlPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
