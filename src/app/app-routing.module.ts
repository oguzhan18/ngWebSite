import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './client/component/news/news.component';
import { AboutComponent } from './client/pages/about/about.component';
import { ContactComponent } from './client/pages/contact/contact.component';
import { HomeComponent } from './client/pages/home/home.component';
import { LivePriceComponent } from './client/pages/live-price/live-price.component';
import { OurservicesComponent } from './client/pages/ourservices/ourservices.component';
import { OurstoresComponent } from './client/pages/ourstores/ourstores.component';


const routes: Routes = [
  // { path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'ourstores', component:OurstoresComponent},
  {path:'services', component:OurservicesComponent},
  {path:'contact', component:ContactComponent},
  {path:'pricelive', component:LivePriceComponent},
  {path:'news', component:NewsComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
