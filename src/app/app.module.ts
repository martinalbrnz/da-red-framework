import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetItemComponent } from './pet-item/pet-item.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetListComponent } from './pet-list/pet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PetItemComponent,
    PetDetailsComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
