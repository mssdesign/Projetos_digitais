import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menuCtr: MenuController, private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  closeMenu() {
    this.menuCtr.close('m1')
  }
  
}
