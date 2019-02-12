import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router'

import { AppComponent} from './app.component';
import { SongDetailComponent} from './song-detail/song-detail.component';
import {EmptyComponent} from './empty/empty.component';

export const router: Routes = [
  { path: '', redirectTo:"empty",  pathMatch: 'full'},
  { path: 'empty', component: EmptyComponent},
  { path: 'song/:id', component: SongDetailComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
