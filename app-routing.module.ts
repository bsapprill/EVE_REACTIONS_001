import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { UserIsAuthedGuard } from './guards/user-is-authed.guard';
import { UserIsAdminGuard } from './guards/user-is-admin.guard';

import { FirebaseAdminComponent } from './components/firebase-admin/firebase-admin.component';

import { AppComponent } from './app.component';
import { ReactionsComponent } from './components/reactions/reactions.component';

const appRoutes: Routes = [

  {path: 'firebase', component: FirebaseAdminComponent},
  {path: '', component: ReactionsComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
