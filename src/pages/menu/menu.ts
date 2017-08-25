import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  @ViewChild('content') nav: Nav;

  rootPage: any = 'TabsPage';
  pages: Array<{ title: string, component: any }>;

  constructor() {
      this.pages = [
        { title: 'Tabs Page', component: 'TabsPage' },
        { title: 'Home Page', component: 'HomePage' }
      ];
  }

  openPage(page) {
      this.nav.setRoot(page.component);
  }

}
