import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MapPage} from './pages/map/map';
import {ConnectivityService} from './providers/connectivity-service/connectivity-service';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = MapPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
    	StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [ConnectivityService]);
