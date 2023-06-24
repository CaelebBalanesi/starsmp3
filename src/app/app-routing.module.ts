import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ItemShowcaseComponent } from './pages/item-showcase/item-showcase.component';
import { LandingComponent } from './pages/landing/landing.component';
import { JimimodeComponent } from './pages/jimimode/jimimode.component';

const routes: Routes = [
  { path: 'home', component: CatalogComponent},
  { path: '', component: LandingComponent},
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ItemShowcaseComponent},
  { path: 'jimimode', component: JimimodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
