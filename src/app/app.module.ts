import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavComponent } from './Favorites/fav/fav.component';
import { HeaderComponent } from './Header/header/header.component';
import { HomeComponent } from './Home/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeDetailsComponent } from './Recipes/recipe-details/recipe-details.component';
import { Icategory } from './Models/icategory';
import { Iproduct } from './Models/iproduct';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './Not-Found/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    FavComponent,
    HeaderComponent,
    HomeComponent,
    RecipeDetailsComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgFor,
    NgIf,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
