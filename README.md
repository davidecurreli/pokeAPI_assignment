# PokeAppTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

##Code Description

The application consists of three different components and a service that interacts with the https://pokeapi.co/ API endpoint.

###Services

####FetchDataService

This service gathers pokemon list from the API using the fetchPokemonList() method, and acquire the selected pokemon details via the fetchPokemonDetails(PokemonID) method.
It exposes a utility function getPokemonImage() to return the correct URL for the front sprite of the selected pokemon.

In this case the simple requests use only the Http get() method.

####fetchPokemonList() API response format
PokemonFetchList {
    count: number,
    next: string,
    previous: string,
    results: PokemonList[] // Contains the pokemon object list 
}

####fetchPokemonDetails(PokemonID: string) API response format
PokemonDetails {
    abilities: object[],
    name: string,
    types: object[],
    base_experience: number,
    height: number,
    weight: number
}

###Components

####Home
In this component a simple table displays the pokemon list acquired via the fetchPokemonList() method of the FetchDataService;
It redirects error requests to the ErrorHandlerComponent.

####Details
This component recives a pokemon id through URL parameters and displays the data returned from the fetchPokemonDetails(PokemonID) method;
It redirects error requests to the ErrorHandlerComponent.

####ErrorHandler
This component recives an error message through URL parameters and shows it to the user; if no error was received the user tried to access an inexistent page and a message is displayed accordingly.

###Routing

The app-routing-module handles the routing paths for the application. At this point no route is access guarded.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

