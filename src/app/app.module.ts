import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavitemComponent } from './navitem/navitem.component';
import { HeadingComponent } from './heading/heading.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { ReviewItemComponent } from './review-item/review-item.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { VideomodalComponent } from './videomodal/videomodal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogitemComponent } from './blogitem/blogitem.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NavComponent,
    NavitemComponent,
    HeadingComponent,
    ReviewItemComponent,
    SignupComponent,
    PagenotfoundComponent,
    VideomodalComponent,
    DashboardComponent,
    BlogitemComponent,
    FooterComponent,
    ContactsComponent,
    HomeComponent,
    CreatecontactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    CarouselModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,MatSnackBarModule,
    HttpClientModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
