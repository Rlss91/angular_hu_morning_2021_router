import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PetsComponent } from './pages/pets/pets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QueryParamsComponent } from './pages/query-params/query-params.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PetsComponent,
    NavbarComponent,
    QueryParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
