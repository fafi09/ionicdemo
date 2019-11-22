import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalpageComponent } from '../modalpage/modalpage.component';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  users:any = [{name:'tom',age:14},{name:'tom1',age:14},{name:'tom2',age:14}
  ,{name:'tom3',age:14},{name:'tom4',age:14},{name:'tom5',age:14},{name:'tom6',age:14},{name:'tom7',age:14},{name:'tom8',age:14},{name:'tom9',age:14}];
  //constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      //分页取数
      this.users.push({name:'tom10',age:14})
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //if (data.length == 1000) {
       // event.target.disabled = true;
      //}
    }, 500);
  }

  toggleInfiniteScroll() {
    console.log('toggleInfiniteScroll');
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  constructor(private menu: MenuController,public modalController: ModalController) { }

  openFirst() {
    console.log('openFirst');
    this.menu.enable(true, 'first');
    this.menu.open('first');
  
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalpageComponent,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }
}
