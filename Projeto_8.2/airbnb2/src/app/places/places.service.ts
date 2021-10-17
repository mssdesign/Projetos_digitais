import { Place } from './offers/place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place
    (
      'p1', 
      'Manhattan Mansion', 
      'In the heart of New York City.', 
      'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg', 
      20.00
    ),
    new Place
    (
      'p2', 
      'Washington Mansion', 
      'In the heart of EUA.', 
      'https://cdn.pixabay.com/photo/2016/08/26/20/01/the-white-house-1623005_960_720.jpg', 
      220.00
    ),
    new Place
    (
      'p3', 
      'Brazil Mansion', 
      'In the heart of Hell.', 
      'https://cdn.pixabay.com/photo/2020/06/02/10/44/mumbai-5250402_960_720.jpg', 
      0.99
    ),
    new Place
    (
      'p4', 
      'Antarctic Mansion', 
      'In the middle of nowhere.', 
      'https://cdn.pixabay.com/photo/2017/01/09/00/49/snow-1964361_960_720.jpg', 
      55.00
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
