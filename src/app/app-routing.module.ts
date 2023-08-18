import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingChildOneComponent } from './routing-child-one/routing-child-one.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingComponent } from './home-routing/home-routing.component';
import { ArrayItemComponent } from './array-item/array-item.component';
import { FornotfourComponent } from './fornotfour/fornotfour.component';

const routes: Routes = [
  { path: '', component: HomeRoutingComponent },
  { path: 'child-1', component: RoutingChildOneComponent },
  { path: 'array/:id', component: ArrayItemComponent },
  { path: '**', component: FornotfourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
