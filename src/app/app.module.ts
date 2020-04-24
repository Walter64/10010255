import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// allows app to perform HTTP requests and inject the HttpClient into an application class
import { HttpClientModule } from '@angular/common/http';

// Camera provides access to the device's default camera application, also add to providers
import { Camera } from '@ionic-native/camera/ngx';

// enables app to use local storage of device / add to imports as .forRoot so one instance is ever created
import { IonicStorageModule } from '@ionic/storage';

// allows app to use Template driven forms, add to imports array so app can use
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule],
  providers: [
    Camera,    
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
