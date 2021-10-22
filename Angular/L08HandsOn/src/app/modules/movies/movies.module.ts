import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplayMoviesComponent } from './display-movies/display-movies.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DisplayMoviesComponent],
  exports: [DisplayMoviesComponent]
})
export class MoviesModule {}