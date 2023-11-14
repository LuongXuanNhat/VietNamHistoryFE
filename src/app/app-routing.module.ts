import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './account/account/register/register.component';
import { LoginComponent } from './account/account/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/auth/auth.interceptor';
import { AccountComponent } from './account/account/account.component';
import { UpdateuserinforComponent } from './account/updateuserinfor/updateuserinfor.component';
import { UpdateaccountComponent } from './account/updateaccount/updateaccount.component';
import { IntroduceComponent } from './account/introduce/introduce.component';
import { ChangeemailComponent } from './account/updateaccount/changeemail/changeemail.component';
import { ChangepasswordComponent } from './account/updateaccount/changepassword/changepassword.component';
import { AuthGuard } from './guard/auth.guard';
import { PostdetailComponent } from './discover/postdetail/postdetail.component';
import { DiscoverComponent } from './discover/discover.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'discover', component:DiscoverComponent},
  { path: 'discover/:postId', component: PostdetailComponent},
  {
    path: 'account',
    component: AccountComponent, canActivate: [AuthGuard] ,
    children: [
      { path: '', redirectTo: 'updateuserinfor', pathMatch: 'full',},
      { path: 'updateuserinfor', component: UpdateuserinforComponent },
      { path: 'updateaccount', component: UpdateaccountComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'changeemail', component: ChangeemailComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppRoutingModule { }
