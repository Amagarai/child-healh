import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonLabel, IonIcon, IonBadge, IonTabBar, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabButton, IonLabel, IonIcon, IonBadge, IonTabBar, IonTabs]
})
export class TabsPage implements OnInit {

  actuelTab: any;
  constructor() { }

  ngOnInit() {
    this.actuelTab = 'home'
  }

  tabClicked(e: any) {
    this.actuelTab = e.tab
  }

}
