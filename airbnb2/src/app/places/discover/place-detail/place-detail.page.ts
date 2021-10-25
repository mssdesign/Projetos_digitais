import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Place } from './../../offers/place.model';
import { PlacesService } from './../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController, 
    private route: ActivatedRoute, 
    private placesService: PlacesService,
    private modalCtrl: ModalController
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place = this.placesService.getPlace(paramMap.get('placeId'))
    });
  }

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover'); //Animação errada
    //this.navCtrl.pop(); //Só funciona se tiver página anterior
    //this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    }).then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
    }).then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
    });
  }

}
