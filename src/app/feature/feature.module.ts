import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLayoutComponent } from './feature-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { GeneralModule } from './general/general.module';

const routes: Routes = [
  {
    path: '',
    component: FeatureLayoutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminModule,
    GeneralModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeatureLayoutComponent]
})
export class FeatureModule { }