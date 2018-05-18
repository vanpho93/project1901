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
import { StoryService } from './services/story.service';
import { CommentService } from './services/comment.service';
import { RequestService } from './services/request.service';
import { userReducer, loadingReducer, storiesReducer } from './ngrx/reducers';
import { MustBeUserGuard } from './guards/must-be-user.guard';
import { MustBeGuestGuard } from './guards/must-be-guest.guard';
import { StoryFormComponent } from './profile/story-form/story-form.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './profile/story/story.component';

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
    FriendsComponent,
    StoryFormComponent,
    StoriesComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer, loading: loadingReducer, stories: storiesReducer }),
    RouterModule.forRoot(routesConfig),
  ],
  providers: [RequestService, UserService, StoryService, CommentService, MustBeUserGuard, MustBeGuestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
