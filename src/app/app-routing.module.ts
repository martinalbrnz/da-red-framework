import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const routes: Routes = [
  { path: '', component: PetListComponent },
  { path: 'pet/:petName', component: PetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
