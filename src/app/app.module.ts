import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopImageComponent } from './top-image/top-image.component';
import { FeaturesComponent } from './features/features.component';
import { LinksComponent } from './links/links.component';
import { MatCardModule } from '@angular/material/card';
import { OfferComponent } from './offer/offer.component';
import { DifferencesComponent } from './differences/differences.component';

@NgModule({
  declarations: [AppComponent, TopImageComponent, FeaturesComponent, LinksComponent, OfferComponent, DifferencesComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
