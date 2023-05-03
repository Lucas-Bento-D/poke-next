import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "../styles/components/Card.module.css"

export default function Card({pokemon}: pokemonCardProps){
    return(
        <div className={styles.card}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={120}
                height={120}
                />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <Link className={styles.link} href={`/pokemon/${pokemon.id}`}>
                detalhes
            </Link>
        </div>
    )
}