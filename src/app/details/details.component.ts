import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetails } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public pokemonDetails: PokemonDetails = {
    abilities: [], name: "",
    types: [], base_experience: 0,
    height: 0, weight: 0
  };
  private pokemonFetchEndpoint: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.fetchPokemonDetails("/" + param.id);
    });
  }

  fetchPokemonDetails(pokemonID: string): void {
    this.http.get<PokemonDetails>(this.pokemonFetchEndpoint.concat(pokemonID)).subscribe({
      next: data => {
        this.pokemonDetails.abilities = data.abilities;
        this.pokemonDetails.name = data.name;
        this.pokemonDetails.types = data.types;
        this.pokemonDetails.base_experience = data.base_experience;
        this.pokemonDetails.height = data.height;
        this.pokemonDetails.weight = data.weight;
      },
      error: error => {
        console.error('There was an error!', error);
        this.router.navigate(['/error/', { id: error.message }]);
      }
    })
  }
}
