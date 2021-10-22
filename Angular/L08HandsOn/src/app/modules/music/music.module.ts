import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMusicComponent } from './components/display-music/display-music.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DisplayMusicComponent],
  exports: [DisplayMusicComponent]
})
export class MusicModule { }
