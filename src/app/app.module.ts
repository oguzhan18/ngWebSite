import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './client/utils/footer/footer.component';
import { TopbarComponent } from './client/utils/navs/topbar/topbar.component';
import { PricebarComponent } from './client/utils/navs/pricebar/pricebar.component';
import { HomeComponent } from './client/pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { CarouselComponent } from './client/component/carousel/carousel.component';
import { IvyCarouselModule } from "angular-responsive-carousel";
// import { ClientModule } from './client/client.module';
import { TableComponent } from './client/component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeProvider } from './client/service/home.provider';
import {MatTableModule} from '@angular/material/table';
import { ImageDraverComponent } from './client/component/image-draver/image-draver.component';
import { PriceCalculatorComponent } from './client/component/price-calculator/price-calculator.component';
import { PhoneWebsiteComponent } from './client/component/phone-website/phone-website.component';
import { AboutComponent } from './client/pages/about/about.component';
import { OurstoresComponent } from './client/pages/ourstores/ourstores.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OurservicesComponent } from './client/pages/ourservices/ourservices.component';
import { ContactComponent } from './client/pages/contact/contact.component';
import { LivePriceComponent } from './client/pages/live-price/live-price.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    PricebarComponent,
    HomeComponent,
    CarouselComponent,
    TableComponent,
    ImageDraverComponent,
    PriceCalculatorComponent,
    PhoneWebsiteComponent,
    AboutComponent,
    OurstoresComponent,
    OurservicesComponent,
    ContactComponent,
    LivePriceComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,


    IvyCarouselModule,
    MatIconModule,

    MatCheckboxModule,
    MatTableModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [HomeProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
