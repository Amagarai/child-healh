import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { time, timeOutline } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      'fb': '../assets/facebook_ic.svg',
      'google': '../assets/google_ic.svg',
      'apple': '../assets/cib_apple.svg',
      'apple-w': '../assets/appleW.svg',
      'home': 'assets/home.svg',
      'homec': 'assets/homec.svg',
      // home,
      time: timeOutline,
      timec: time,
    })
  }
}
