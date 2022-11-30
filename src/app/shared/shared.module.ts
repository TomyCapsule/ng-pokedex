import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PokemonModule } from '../pokemon/pokemon.module';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    PokemonModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
