import { CUSTOM_ELEMENTS_SCHEMA,  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';


import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

@NgModule({
  imports: [CommonModule,Ng2SmartTableModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
      },
      {
          path: 'course/:id',
          component:DetailPageComponent
        }
    ])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePageComponent, DetailPageComponent],
})
export class CourseslibModule {}
