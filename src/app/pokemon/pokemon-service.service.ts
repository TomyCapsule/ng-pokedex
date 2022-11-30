import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, map, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonAPI } from '../interfaces/pokemonAPI';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`assets/pokemon.json`).pipe(
      delay(1000),
      map(pokeList => pokeList.map(pokemon => this.formatPokemon(pokemon)))

    )
  }

  formatPokemon(pokemon: Pokemon): Pokemon{
    return {...pokemon, name: this.pokemonNameToTitleCase(pokemon.name)}
  }

  pokemonNameToTitleCase(name: string): string{
    return name.charAt(0).toUpperCase()+name.slice(1)
  }

  getPokemonDetails(pokename: string): Observable<PokemonAPI>{
    return this.http.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${pokename.toLowerCase()}`)
  }
}
