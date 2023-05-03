import Link from "next/link";
import Image from "next/image"
import Styles from "../styles/components/Navbar.module.css"

export default function Navbar(){
    return(
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <Image 
                width="50"
                height="50"
                alt="Poke logo" 
                className="" src="/images/poke-logo.png?v=2" />
                <h1>PokeNext</h1>
            </div>
            <ul className={Styles.link_items}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}