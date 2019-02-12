import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ConfigService } from './config/config.service';
import {SongDetailComponent} from './song-detail/song-detail.component';
import {routes} from './app.router';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    SongDetailComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
