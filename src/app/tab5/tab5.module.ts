import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab5Page } from './tab5.page';
import { MenusComponent } from "../menus/menus.component";
import { ModalpageComponent } from "../modalpage/modalpage.component";
import { PopoverComponent } from "../popover/popover.component";
import { File } from '@ionic-native/file/ngx';
const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab5Page,
    ModalpageComponent, PopoverComponent],
    entryComponents: [ModalpageComponent, PopoverComponent],
  providers: [File]
})
export class Tab5PageModule {}
