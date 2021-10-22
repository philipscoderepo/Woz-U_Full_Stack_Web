import { Component, OnInit } from '@angular/core';
import { Places } from '../models/places';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-favorite-places',
  templateUrl: './favorite-places.component.html',
  styleUrls: ['./favorite-places.component.css']
})
export class FavoritePlacesComponent implements OnInit {
  places: Places[];
  placeDataService: PlacesService;

  constructor(private placesService: PlacesService) {
    this.placeDataService = this.placesService;
  }

  ngOnInit() {
    this.placeDataService.getPlaces().subscribe(places => this.places = places);
  }

}
