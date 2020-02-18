import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/container/navigation/navigation.component';
import { FooterComponent } from './components/container/footer/footer.component';


import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { HotelsComponent } from './components/catalog/hotels/hotels.component';
import { HotelDetailsComponent } from './components/catalog/hotel-details/hotel-details.component';
import { HotelComponent } from './components/catalog/hotel/hotel.component';
import { CreateHotelComponent } from './components/catalog/create-hotel/create-hotel.component';
import { AppComponent } from './app.component';
import { HotelEditComponent } from './components/catalog/hotel-edit/hotel-edit.component';


@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    FooterComponent,
    HotelsComponent,
    HotelDetailsComponent,
    HotelComponent,
    CreateHotelComponent,
    HotelEditComponent
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
