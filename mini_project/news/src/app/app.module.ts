import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {GoogleMapsModule} from '@angular/google-maps'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularMaterialModule } from './angular-material.module'
import { AppComponent } from './app.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { SliderDirective } from './directives/slider.directive';


import { ReversePipe } from 'src/app/pipes/reverse.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { UpdateComponent } from './components/update/update.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service'


const routes=[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'login', component: LoginComponent}, 
  { path: 'addNews', component: AddNewsComponent,canActivate:[AuthGuardService ]},
  { path: 'updateNews', component: UpdateComponent ,canActivate:[AuthGuardService ]},
  {path:'home', component:HomeComponent},
  {path:'sports', component:SportsComponent},
  {path:'about-us', component: AboutusComponent},
  {path:'contact-us', component: ContactusComponent},
  {path:'***', redirectTo:'/home', pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SliderDirective,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    SportsComponent,
    LoginComponent,
    AddNewsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule, 
    SlickCarouselModule ,
    AngularMaterialModule,
    BrowserAnimationsModule ,
    NgbModule,
    GoogleMapsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
