import { Component, OnInit, Input, Inject } from '@angular/core';
import { PokeColor } from 'src/app/interfaces/pokecardColor';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonServiceService } from '../../pokemon-service.service';
import { tap } from 'rxjs';
import { PokemonAPI } from 'src/app/interfaces/pokemonAPI';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PokeStats, Stats } from 'src/app/interfaces/pokestats';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon!: Pokemon

  constructor(private dialog: MatDialog, private pokeService: PokemonServiceService) { }

  ngOnInit(): void {
  }

  getCardColor(){
    const color = PokeColor[this.pokemon.types[0] as keyof typeof PokeColor]
    return {'background-color': color}
  }

  openDialog(){
    const pokemonDeets = this.pokeService.getPokemonDetails(this.pokemon.name)
    pokemonDeets.pipe(
      tap(()=>console.log('clik clik')),
      tap(pokemon => this.dialog.open(PokemonDialog, {data: pokemon})
      )
    ).subscribe()
  }

}

@Component({
  selector: 'pokemon-dialog',
  templateUrl: './pokemon.dialog.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonDialog implements OnInit{

  stats!: PokeStats[]
  view: [number,number] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Stat';
  yAxisLabel: string = 'Base_stat';

  colorScheme = "vivid"

  constructor(@Inject(MAT_DIALOG_DATA) public data: PokemonAPI){
    const series = this.data.stats.map((stat): Stats => {
      const statName = stat.stat.name === "special-attack"
      ? "sp-atk"
      : stat.stat.name === "special-defense"
        ? 'sp-def'
        : stat.stat.name
      return { name: statName, value: stat.base_stat}
    })
    const stats = [{name: this.data.name, series: series}]
    Object.assign(this, {stats})
  }

  ngOnInit(): void {

  }
}
