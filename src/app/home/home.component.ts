import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../interfaces';
import { Router } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemonList: PokemonList[] = [];

  constructor(private router: Router, private data: FetchDataService) { }

  ngOnInit(): void {
    this.data.fetchPokemonList().subscribe({
      next: data => {
        this.pokemonList = data.results;
      },
      error: error => {
        console.error('There was an error!', error.message);
        this.router.navigate(['/error/', { id: error.message }]);
      }
    });
  }

  public getPokemonImage(url: string): string {
    var pokemonID: string = this.getPokemonID(url);

    return this.data.getPokemonImage(pokemonID);
  }

  public getPokemonID(url: string): string {
    var pokemonID: string = url.substr(url.indexOf("pokemon/") + 8,).slice(0, -1);

    return pokemonID;
  }
}
