import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdministrationMenuComponent } from './administration-menu/administration-menu.component';
import { AdministrationUserComponent } from './administration-user/administration-user.component';
import { AdministrationApplicationComponent } from './administration-application/administration-application.component';
import { AdministrationAboutComponent } from './administration-about/administration-about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from "./counter/counter.component";

import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EmailNotificationsPipe } from './email-notifications.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { StoreModule } from '@ngrx/store';
import { counterReducer } from "./ngrx/app.reducer";
import { PumpComponent } from './pump/pump.component';

@NgModule({
  imports: [
    MatNativeDateModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'shop', component: ProductListComponent },
      {
        path: 'admin', component: AdministrationComponent, children: [
          { path: 'user', component: AdministrationUserComponent },
          { path: 'application', component: AdministrationApplicationComponent },
          { path: 'about', component: AdministrationAboutComponent },
          { path: '', redirectTo: 'user', pathMatch: 'full' },
        ]
      },
      { path: 'products/:productId', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'pump', component: PumpComponent },
      { path: '**', component: ProductListComponent }
    ]),
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AdministrationComponent,
    AdministrationMenuComponent,
    AdministrationUserComponent,
    AdministrationApplicationComponent,
    AdministrationAboutComponent,
    DashboardComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent,
    EmailNotificationsPipe,
    CounterComponent,
    PumpComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/