import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatTreeModule,
    MatExpansionModule,
    MatListModule,
  ]
})
export class MaterialModule { }
