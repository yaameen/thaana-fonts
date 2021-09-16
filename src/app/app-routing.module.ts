import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontsComponent } from './pages/fonts/fonts.component';

const routes: Routes = [
  { path: "", component: FontsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
