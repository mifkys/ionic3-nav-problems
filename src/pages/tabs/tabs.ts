import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'AboutPage';
  tab2Root = 'ContactPage';

  constructor() {}

  ionViewDidLoad() {
    console.log('ioniViewDidLoad TabsPage');
  }

  ionViewWillUnload() {
    console.log('ioniViewWillUnload TabsPage');
  }
}
