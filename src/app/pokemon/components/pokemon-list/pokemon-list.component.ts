import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonServiceService } from '../../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokeService: PokemonServiceService) { }

  pokemonList$!: Observable<Pokemon[]>

  ngOnInit(): void {
    this.pokemonList$ = this.pokeService.getPokemonList()
  }



}
