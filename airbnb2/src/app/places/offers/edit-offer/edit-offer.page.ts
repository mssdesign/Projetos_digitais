import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Place } from './../place.model';
import { PlacesService } from './../../places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  placeEdit: Place;

  constructor(private placesService: PlacesService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.placeEdit = this.placesService.getPlace(paramMap.get('placeId'))
    });
  }

}
