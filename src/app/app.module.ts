import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSingleComponent } from './order-single/order-single.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderContainerComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    UserContainerComponent,
    UserDetailComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailsComponent,
    NavbarComponent,
    NotFoundComponent,
    MaincontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
