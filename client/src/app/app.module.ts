import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserService } from './services/user.service';
import { RequestService } from './services/request.service';
import { userReducer, loadingReducer } from './ngrx/reducers';
import { MustBeUserGuard } from './guards/must-be-user.guard';
import { MustBeGuestGuard } from './guards/must-be-guest.guard';

const routesConfig: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [MustBeUserGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [MustBeUserGuard] },
  { path: 'signin', component: SignInComponent, canActivate: [MustBeGuestGuard]  },
  { path: 'signup', component: SignUpComponent, canActivate: [MustBeGuestGuard]  },
  { path: 'password', component: ForgotPasswordComponent, canActivate: [MustBeGuestGuard]  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileComponent,
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer, loading: loadingReducer }),
    RouterModule.forRoot(routesConfig),
  ],
  providers: [RequestService, UserService, MustBeUserGuard, MustBeGuestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
