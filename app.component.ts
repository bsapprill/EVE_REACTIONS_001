import { Component, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './STATE/app.store';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(
    private appState: NgRedux<IAppState>,
    private firebase: AngularFireAuth,
    private router: Router,
  ) {
    
  }
  
}
