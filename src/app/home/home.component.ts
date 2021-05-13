import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PokemonFetchList, PokemonList } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private pokemonFetchEndpoint: string = "https://pokeapi.co/api/v2/pokemon";
  private imageEndpoint: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  private imageExtension: string = ".png";

  public pokemonList: PokemonList[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    this.http.get<PokemonFetchList>(this.pokemonFetchEndpoint).subscribe({
      next: data => {
        this.pokemonList = data.results;
      },
      error: error => {
        console.error('There was an error!', error.message);
        this.router.navigate(['/error/', { id: error.message }]);
      }
    })
  }

  getPokemonImage(url: string): string {
    var pokemonID: string = url.substr(url.indexOf("pokemon/") + 8,).slice(0, -1);

    pokemonID = pokemonID.concat(this.imageExtension);
    return this.imageEndpoint.concat(pokemonID);
  }

  pokemonID(url: string): string {
    var pokemonID: string = url.substr(url.indexOf("pokemon/") + 8,).slice(0, -1);

    return pokemonID;
  }
}
