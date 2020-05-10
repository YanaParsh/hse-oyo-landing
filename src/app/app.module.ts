import { ObserversModule } from '@angular/cdk/observers';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DifferencesComponent } from './differences/differences.component';
import { FeaturesComponent } from './features/features.component';
import { LinksComponent } from './links/links.component';
import { OfferComponent } from './offer/offer.component';
import { PromoComponent } from './promo/promo.component';
import { ReasonComponent } from './reason/reason.component';
import { TopImageComponent } from './top-image/top-image.component';
import { FeaturePicturesComponent } from './feature-pictures/feature-pictures.component';
import { FitnesPictureComponent } from './fitnes-picture/fitnes-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    TopImageComponent,
    FeaturesComponent,
    LinksComponent,
    OfferComponent,
    DifferencesComponent,
    PromoComponent,
    ReasonComponent,
    FeaturePicturesComponent,
    FitnesPictureComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ObserversModule, MatIconModule, MatCardModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
