import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { PlayerRateComponent } from './player-rate/player-rate.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { NewPlayerComponent } from './new-player/new-player.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NavigationBarComponent,
    AppFooterComponent,
    PlayerRateComponent,
    routingComponents,
    FilterPipe,
    NewPlayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
