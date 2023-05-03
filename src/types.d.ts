interface pokemonsProps{
    pokemons: pokemonProps[] 
}
interface pokemonCardProps{
    pokemon: pokemonProps
}
interface pokemonProps{
    id: number,
    name: string,
    url: string
}