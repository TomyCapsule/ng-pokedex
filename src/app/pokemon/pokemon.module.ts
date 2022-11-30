import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent, PokemonDialog } from './components/pokemon/pokemon.component';
import { MaterialModule } from '../shared/material.module';
import { PokemonServiceService } from './pokemon-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonComponent,
    PokemonDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    NgxChartsModule
  ],
  exports: [
    MaterialModule,
    PokemonListComponent
  ],
  providers: [
    PokemonServiceService
  ]
})
export class PokemonModule { }
