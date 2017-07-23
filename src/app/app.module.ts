import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';



import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { IonicStorageModule } from '@ionic/storage';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { HomeFilterPage } from '../pages/home-filter/home-filter';
@NgModule({
  declarations: [
    MyApp,
    
    
    
    SessionDetailPage,
    HomePage,
    HomeFilterPage,
   
    
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: HomePage, name: 'Home', segment: 'home' },
        
        
        
   
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
 
    SessionDetailPage,
    HomePage,
    HomeFilterPage,
    
    
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConferenceData,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
