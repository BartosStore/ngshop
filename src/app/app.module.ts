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
import { PumpComponent } from './pump/pump.component';
import { EmailNotificationsPipe } from './email-notifications.pipe';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from "./counter/counter.reducer";
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { PrintDialogComponent } from './print-dialog/print-dialog.component';
import { VoterDetailComponent } from './voter-detail/voter-detail.component';
import { PostsComponent } from './posts/posts.component';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/posts/post.effect';
import { PostService } from './service/post.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserEffects } from './store/users/user.effect';
import { UserService } from './service/user.service';
import { ErrorEffects } from './store/errors/error.effect';
import { appReducers } from './store/app.reducer';

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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
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
      { path: 'pump/:voterId', component: VoterDetailComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:postId', component: PostDetailComponent },
      { path: '**', component: ProductListComponent }
    ]),
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PostEffects, UserEffects, ErrorEffects])
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
    PumpComponent,
    PrintDialogComponent,
    VoterDetailComponent,
    PostsComponent,
    PostDetailComponent
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/