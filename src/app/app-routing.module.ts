import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMapComponent } from './main-map/main-map.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
  { path: '', component: MainMapComponent },
  { path: 'add-event', component: AddEventComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
