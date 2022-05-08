import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvertisementsComponent } from './advertisements/advertisements.component';

const routes: Routes = [
  {path: 'advertisement', component:AdvertisementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
