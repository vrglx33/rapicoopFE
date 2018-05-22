
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { StartServiceComponent } from './start-service/start-service.component';
import { StopServiceComponent } from './stop-service/stop-service.component';
import { DistributorDetailComponent } from './distributor-detail/distributor-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateLocationService } from './services/update-location.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'startService',  component: StartServiceComponent },
  { path: 'stopService',  component: StopServiceComponent },
];
const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyCgf8YhUNJstXTQhxJVHHDQ6J2sqWstumI',
});

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StartServiceComponent,
    StopServiceComponent,
    DistributorDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    googleMapsCore,
  ],
  providers: [
    HttpClientModule,
    UpdateLocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
