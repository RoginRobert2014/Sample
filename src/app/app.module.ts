import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListingPageComponent } from './components/detail-listing/listing-page.component';
import { DashboardDataService } from './components/detail-listing/listing-page.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListingPageComponent, pathMatch: 'full' },
      { path: 'landing-page', component: ListingPageComponent },
    ])
  ],
  providers: [
    DashboardDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
