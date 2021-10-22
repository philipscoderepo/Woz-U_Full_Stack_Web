import { Component, OnInit } from '@angular/core';
import { Places } from '../models/places';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-placeform',
  templateUrl: './placeform.component.html',
  styleUrls: ['./placeform.component.css']
})

export class PlaceFormComponent implements OnInit {
  //New place will store the inputted data
  newPlace: Places = new Places();
  //Model will be the current list of places
  model: Places[];
  //Load the places service from the places.service.ts file
  placesService: PlacesService;
  
  constructor(private placesSerivce: PlacesService) {
    this.placesSerivce = placesSerivce;
  }

  ngOnInit() {
  }

  formSubmit(){
    if(this.newPlace.city == undefined || 
       this.newPlace.country == undefined || 
       this.newPlace.description == undefined ){
      //Clear the null data
      this.newPlace = new Places();
      console.log('Null Information: ', this.model);
    }
    else{
      //Load the list of places already in the store
      this.placesSerivce.getPlaces().subscribe(
        places => {
          this.model = places as Places[]
      });
      //Set the new id
      this.newPlace.id = this.model.length;
      //Add the new place to the list of places
      this.model.push(this.newPlace);
      console.log('Submited: ', this.model);
      //Clear the data from the newPlace
      this.newPlace = new Places();
    }
  }

}
