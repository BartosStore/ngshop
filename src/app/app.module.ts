import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdministrationMenuComponent } from './administration-menu/administration-menu.component';
import { AdministrationUserComponent } from './administration-user/administration-user.component';
import { AdministrationApplicationComponent } from './administration-application/administration-application.component';
import { AdministrationAboutComponent } from './administration-about/administration-about.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent, pathMatch: 'full' },
      {
        path: 'admin', component: AdministrationComponent, children: [
          { path: 'user', component: AdministrationUserComponent },
          { path: 'application', component: AdministrationApplicationComponent },
          { path: 'about', component: AdministrationAboutComponent },
          { path: '', redirectTo: 'user', pathMatch: 'full' },
        ]
      },
      { path: '**', component: ProductListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AdministrationComponent,
    AdministrationMenuComponent,
    AdministrationUserComponent,
    AdministrationApplicationComponent,
    AdministrationAboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/