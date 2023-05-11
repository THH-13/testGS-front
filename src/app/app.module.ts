import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {GroupeMusiqueModule} from "./groupe-musique/groupe-musique.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { NonTrouveComponent } from './non-trouve/non-trouve.component';

@NgModule({
  declarations: [
    AppComponent,
    NonTrouveComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    GroupeMusiqueModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
