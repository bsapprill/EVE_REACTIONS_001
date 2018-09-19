import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from './app-routing.module';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { IAppState, rootReducer, INITIAL_STATE } from './STATE/app.store';

import { HomeBarComponent } from './components/home-bar/home-bar.component';
import { FirebaseAdminComponent } from './components/firebase-admin/firebase-admin.component';
import { ReactionGroupSelectorComponent } from './components/reaction-group-selector/reaction-group-selector.component';
import { UsersReactionListComponent } from './components/users-reaction-list/users-reaction-list.component';
import { ReactionListMaterialRequirementsComponent } from './components/reaction-list-material-requirements/reaction-list-material-requirements.component';
import { ReactionsComponent } from './components/reactions/reactions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeBarComponent,
    FirebaseAdminComponent,
    ReactionGroupSelectorComponent,
    UsersReactionListComponent,
    ReactionListMaterialRequirementsComponent,
    ReactionsComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    AppRoutingModule,
    
    NgReduxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private redux: NgRedux<IAppState>
  ){
    this.redux.configureStore(rootReducer, INITIAL_STATE);
  }
}
