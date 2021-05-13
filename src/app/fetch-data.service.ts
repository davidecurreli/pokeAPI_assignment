import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonDetails, PokemonFetchList } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private pokemonFetchEndpoint: string = "https://pokeapi.co/api/v2/pokemon";
  private imageEndpoint: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  private imageExtension: string = ".png";

  constructor(private httpClient: HttpClient) { }

  public fetchPokemonDetails(getParam: string) {
    return this.httpClient.get<PokemonDetails>(this.pokemonFetchEndpoint + "/" + getParam);
  }

  public fetchPokemonList() {
    return this.httpClient.get<PokemonFetchList>(this.pokemonFetchEndpoint);
  }

  public getPokemonImage(pokemonID: string): string {
    pokemonID = pokemonID.concat(this.imageExtension);

    return this.imageEndpoint.concat(pokemonID);
  }
}
