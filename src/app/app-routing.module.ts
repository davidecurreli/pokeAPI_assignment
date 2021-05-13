import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'home/details/:id', component: DetailsComponent, pathMatch: 'full' },
  { path: 'error/:msg', component: ErrorHandlerComponent, pathMatch: 'full' },
  { path: '**', component: ErrorHandlerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
