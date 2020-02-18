import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import {HotelsComponent} from './components/catalog/hotels/hotels.component';
import {CreateHotelComponent} from './components/catalog/create-hotel/create-hotel.component';
import { HotelDetailsComponent } from './components/catalog/hotel-details/hotel-details.component';
import { HotelEditComponent } from './components/catalog/hotel-edit/hotel-edit.component';


const routes: Route[] = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'catalog', component:  HotelsComponent},
    { path: 'create/hotel', component:  CreateHotelComponent},  
    { path: 'hotel/:id', component:  HotelDetailsComponent},
    { path: 'edit', component: HotelEditComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}