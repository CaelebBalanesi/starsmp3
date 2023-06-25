import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ItemShowcaseComponent } from './pages/item-showcase/item-showcase.component';
import { LandingComponent } from './pages/landing/landing.component';
import { JimimodeComponent } from './pages/jimimode/jimimode.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'home', component: HomeComponent},
  { path: 'jimimode', component: JimimodeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ItemShowcaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
