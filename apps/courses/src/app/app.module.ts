import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA,  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseslibModule } from '../../../../libs/courseslib/src/lib/courseslib.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule,CourseslibModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@course-inc/courseslib').then(
            module => module.CourseslibModule
          )
      },
    ], { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' })],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
