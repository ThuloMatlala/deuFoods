import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutUs', component: AboutUsPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'contactUs', component: ContactUsPageComponent },
];