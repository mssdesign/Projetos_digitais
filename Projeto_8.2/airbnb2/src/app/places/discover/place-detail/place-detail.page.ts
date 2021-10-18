import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() { }

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover'); //Animação errada
    //this.navCtrl.pop(); //Só funciona se tiver página anterior
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
