import Image from "next/image"
import styles from "../../styles/Pokemon.module.css"
import { useRouter } from "next/router"

export const getStaticPaths = async() => {
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}?limit=${maxPokemons}`)
    const data = await res.json()
    
    data.results.map((pokemon: pokemonProps, index: number) => pokemon.id = index + 1)

    // params
    const paths = data.results.map( (pokemon: pokemonProps, index: number) => {
        return {
            params: {pokemonId: (index + 1).toString()},
        }
    })
    
    // fallback é só pra retornar os 251 pokemons que eu to pedindo no limit
    //Fallback como falso não retorna mais items que o valor limite proposto
    // pela gente na requisição
    //já como true dá pra usar o useRouter e verificar se ta no fallback 
    // pra buscar na api o pokemon especifico e enquanto espera a resuisição 
    // terminar, mostrar uma tela de loading
    return {
        paths,
        fallback: true,
    }
}
export const getStaticProps = async(context: any) => {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return{
        props: {
            pokemon: data
        }
    }
}
export default function Pokemon({pokemon}: any){
    const router = useRouter()
    if(router.isFallback) {
        return <span>Carregando...</span>
    }
    return(
        <div className={styles.pokemon_container}>
            <h1 className={styles.name}> {pokemon.name}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={200}
                height={200}
                />
            <div className={styles.id_container}>
                <h3>Numero:</h3>
                <span>#{pokemon.id}</span>
            </div>
            <div className={styles.types_container}>
                <h3>tipo:</h3>
                <div className={styles.types_wrapper}>{pokemon.types.map( (typeObj: any, index: number) => {
                    return  <span
                                key={index}
                                className={`${styles.type}
                                ${styles['type_'+typeObj.type.name]}`}>
                                    {typeObj.type.name}
                            </span>
                })}</div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.height_container}>
                    <h3>Altura:</h3>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.weight_container}>
                    <h3>Peso:</h3>
                    <p>{pokemon.weight/10} KG</p>
                </div>
            </div>
        </div>
    )
}