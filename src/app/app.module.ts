import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule} from './recipes/recipes.module';
import { RecipesRoutingModule} from './recipes/recipes-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';






import { RecipeService } from './recipes/recipe.service';
import { DataStorageService} from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListService} from './shopping-list/shopping-list.service';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule, 
    RecipesModule,
    RecipesRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [RecipeService, DataStorageService, AuthService, AuthGuard,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
