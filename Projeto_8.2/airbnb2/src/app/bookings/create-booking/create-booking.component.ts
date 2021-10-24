import { Place } from './../../places/offers/place.model';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtr.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtr.dismiss({message: 'This is a dummy message!'}, 'confirm');
  }

}
