import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { CatalogComponent } from './pages/catalog/catalog.component';
import { FilterComponent } from './components/filter/filter.component';
import { ItemComponent } from './components/item/item.component';
import { ItemShowcaseComponent } from './pages/item-showcase/item-showcase.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import { LandingComponent } from './pages/landing/landing.component';
import { JimimodeComponent } from './pages/jimimode/jimimode.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'enviroments/enviroment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CdPostComponent } from './components/cd-post/cd-post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StyledDatePipe } from './pipes/styled-date.pipe';
import { ImageViewerComponent } from './components/item/image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogComponent,
    FilterComponent,
    ItemComponent,
    ItemShowcaseComponent,
    QuantitySelectorComponent,
    LandingComponent,
    JimimodeComponent,
    CdPostComponent,
    ContactComponent,
    StyledDatePipe,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
