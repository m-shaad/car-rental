import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BookComponent } from './book/book.component';
import { FleetComponent } from './fleet/fleet.component';
import { HomeComponent } from './home/home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BookComponent, FleetComponent, HomeComponent, AppFooterComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      	{
	        path: '',
	    	component: HomeComponent
    	},
    	{
	        path: 'home',
	    	component: HomeComponent
    	},
    	{
	        path: 'fleet',
	    	component: FleetComponent
    	},
    	{
	        path: 'book',
	    	component: BookComponent
    	}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
