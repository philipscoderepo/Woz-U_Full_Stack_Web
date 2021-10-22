import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumsService } from './services/albums.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumsComponent],
  exports: [AlbumsComponent],
  providers: [AlbumsService]
})
export class AlbumsModule { }
