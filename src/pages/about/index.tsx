import styles from "../../styles/About.module.css"
import Image from "next/image"
export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum dolor ipsum dolore incidunt laborum ex. Reiciendis saepe illo quibusdam assumenda laborum odit corrupti officiis dolore illum amet! Blanditiis, autem.</p>
            <Image
            src="/images/mega-charizard.png"
            width="300"
            height="300"
            alt="Charizard Mega"/>
        </div>
    )
}