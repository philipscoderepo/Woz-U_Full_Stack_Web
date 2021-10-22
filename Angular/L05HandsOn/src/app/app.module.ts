import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Used in the placeform form
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';

import { PlacesService } from './services/places.service';
import { PlaceFormComponent } from './placeform/placeform.component';

//Don't for get to import modules
@NgModule({
  declarations: [
    AppComponent,
    FavoritePlacesComponent,
    PlaceFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
