import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { SongComponent } from './song/song.component';
import path from 'path';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'song', component: SongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
