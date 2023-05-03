import Card from '../components/Card'
import styles from '../styles/Home.module.css'

// função do next para fazer requisição e
// retornar como propriedade para o componente
export  async function getStaticProps(){
  const maxPokemons = 255
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}?limit=${maxPokemons}`)
  const data = await res.json()
  
  data.results.map((pokemon: pokemonProps, index: number) => pokemon.id = index + 1)
  
  return{
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }: pokemonsProps) {
  return (
    <>
      <ul className={styles.pokeList}>
        {pokemons.map( (pokemon: pokemonProps) => {
          return <Card key={pokemon.id} pokemon={pokemon} />
        })}
      </ul>
    </>
  )
}
