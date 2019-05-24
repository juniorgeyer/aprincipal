import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InicialcomtabPage } from './inicialcomtab.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: InicialcomtabPage,
    children: [
      {
        path: 'tabs1',
        loadChildren: '../tabs1/tabs1.module#Tabs1PageModule'
      },
      {
        path: 'tabs2',
        loadChildren: '../tabs2/tabs2.module#Tabs2PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tabs1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InicialcomtabPage]
})
export class InicialcomtabPageModule {}
