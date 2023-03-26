import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  // สร้าง function เพื่อเปิดหน้าต่างใหม่
  GoToHomePage() {
    this.navCtrl.navigateForward(['/home']);
  }
  GoToAboutPage() {
    this.navCtrl.navigateForward(['/about']);
  }
  GoToSkillsPage() {
    this.navCtrl.navigateForward(['/skills']);
  }
  GoToContactPage() {
    this.navCtrl.navigateForward(['/contact']);
  }
  // สร้าง function เพื่อกลับไปยังหน้าต่างก่อนหน้า
  goBack() {
    this.navCtrl.navigateBack('');
  }
  // constructor(private router: Router) {}
  // onClick() {
  //   this.router.navigate(['/about']);
  // }
}
