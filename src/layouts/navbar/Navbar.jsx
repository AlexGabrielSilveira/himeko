import Link from "next/link"
import styles from  "./Navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.header_container}>
            <Link href="/"><h1>Himeko</h1></Link>
            <div>
                <input type="text" name="search" placeholder="Pesquise algo..." />
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/mangas">Mangas</Link></li>
                <li><Link href="/categorias">Categorias</Link></li>
            <img src="https://th.bing.com/th/id/R.33dd74e36ebd78f6436d898b2daf8e96?rik=1CFbCaYg9DtOOQ&pid=ImgRaw&r=0" alt="user" />
            </ul>
        </header>
    )
}