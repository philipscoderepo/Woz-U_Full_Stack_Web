import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../shared/models/album';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  dataService: AlbumsService;

  constructor(private albumsService: AlbumsService) {
    this.dataService = this.albumsService;
   }

  ngOnInit(): void {
    this.dataService.getAlbums().subscribe(albums => this.albums = albums);
  }

}
