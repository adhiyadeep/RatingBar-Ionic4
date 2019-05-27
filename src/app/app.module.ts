import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IonicRatingModule} from 'ionic4-rating/dist';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


// Import ionic-rating module

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        HttpModule, HttpClientModule,
        AppRoutingModule],

    providers: [
        StatusBar,
        SplashScreen,
        IonicRatingModule,
        HttpModule, HttpClientModule,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
