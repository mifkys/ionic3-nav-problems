import { Component } from '@angular/core';
import { Events, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public events: Events) {}

  catchEvent() {
    this.events.publish('event:catched');
  }

  ionViewDidLoad() {
    console.log('ioniViewDidLoad AboutPage');
    this.events.subscribe('event:catched', () => {
      console.log('event catched');
    });
  }

  ionViewWillLeave() {
    console.log('ioniViewWillLeave AboutPage');
  }

  ionViewDidLeave() {
    console.log('ioniViewDidLeave AboutPage');
  } 

  ionViewWillUnload() {
    console.log('ioniViewWillUnload AboutPage');
    this.events.unsubscribe('event:catched');
  }

}
