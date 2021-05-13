export interface PokemonFetchList {
    count: number,
    next: string,
    previous: string,
    results: PokemonList[]
}

export interface PokemonList {
    name: string,
    url: string
}

export interface PokemonDetails {
    abilities: PokemonAbility[],
    name: string,
    types: PokemonType[],
    base_experience: number,
    height: number,
    weight: number
}

export interface PokemonAbility {
    slot: number,
    ability: Ability
}

export interface Ability {
    name: string,
    url: string
}

export interface PokemonType {
    slot: number,
    type: Type
}

export interface Type {
    name: string,
    url: string
}
