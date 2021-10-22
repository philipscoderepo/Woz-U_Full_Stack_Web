import { Injectable } from '@angular/core';
import { Places } from '../models/places';
//Load this for the getPlaces function
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  places: Places[] = [
    {
      id: 0,
      city: 'Paris',
      country: 'France',
      description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
    },
    {
      id: 1,
      city: 'Berlin',
      country: 'Germany',
      description: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963."
    },
    {
      id: 2,
      city: 'Hong Kong',
      country: 'China',
      description: 'Hong Kong is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline. Central (the business district) features architectural landmarks like I.M. Pei’s Bank of China Tower. Hong Kong is also a major shopping destination, famed for bespoke tailors and Temple Street Night Market.'
    },
    {
      id: 3,
      city: 'Reykjavik',
      country: 'Iceland',
      description: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island’s volcanic activity is the geothermal Blue Lagoon spa, near the village of Grindavik."
    }
  ];

  //Returns the array of places as an observable
  getPlaces = (): Observable<Places[]> => {
    return of(this.places);
  };

  constructor() {}
}
