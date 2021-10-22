import { Injectable } from '@angular/core';
import { Album } from '../../../shared/models/album';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums: Album[] = [
    {
      id: 0,
      title: 'Abbey Road',
      yearReleased: 1969
    },
    {
      id: 1,
      title: 'The Beatles',
      yearReleased: 1968
    },
    {
      id: 2,
      title: 'Let It Be',
      yearReleased: 1970
    },
    {
      id: 3,
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      yearReleased: 1967
    },
    {
      id: 4,
      title: 'Revolver',
      yearReleased: 1966
    },
    {
      id: 5,
      title: 'Rubber Soul',
      yearReleased: 1965
    },
    {
      id: 6,
      title: "A Hard Day's Night",
      yearReleased: 1964
    },
    {
      id: 7,
      title: "Please Please Me",
      yearReleased: 1963
    },
    {
      id: 8,
      title: "Magical Mystery Tour",
      yearReleased: 1967
    },
    {
      id: 9,
      title: "Yellow Submarine",
      yearReleased: 1967
    },
    {
      id: 10,
      title: "Something New",
      yearReleased: 1964
    },
  ]  
  getAlbums = (): Observable<Album[]> => {
    return of(this.albums);
};
}
