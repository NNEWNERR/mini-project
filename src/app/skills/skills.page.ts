import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

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
  ngOnInit() {
  }

}
