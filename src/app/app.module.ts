import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductsComponent} from './components/products/products.component';
import {SignIudialogComponent} from './components/sign-iudialog/sign-iudialog.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {AccountProfileComponent} from './components/account-profile/account-profile.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ButtonModule} from 'primeng/button';
import {MatSelectModule} from '@angular/material/select';
import {MegaMenuModule} from 'primeng/megamenu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ProductsInfoPageComponent} from './components/products/products-info-page/products-info-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {UserSheetComponent} from './components/user-sheet/user-sheet.component';
import {MatListModule} from '@angular/material/list';
import {ShopListComponent} from './components/shop-list/shop-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const appRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'account-profile', component: AccountProfileComponent},
  {path: 'products/products-info-page/:id', component: ProductsInfoPageComponent},
  {path: 'shop-list', component: ShopListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    SignIudialogComponent,
    AccountProfileComponent,
    ProductsInfoPageComponent,
    UserSheetComponent,
    ShopListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    TextFieldModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    SlideMenuModule,
    ButtonModule,
    MatSelectModule,
    MegaMenuModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}, {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
