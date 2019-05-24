import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
//  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' }
  //{ path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' }
//  { path: 'inicialcomtab', loadChildren: './pages/inicialcomtab/inicialcomtab.module#InicialcomtabPageModule' },
  // { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  // { path: 'tabs1', loadChildren: './pages/tabs1/tabs1.module#Tabs1PageModule' },
  // { path: 'tabs2', loadChildren: './pages/tabs2/tabs2.module#Tabs2PageModule' },
];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
