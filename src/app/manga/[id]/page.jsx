"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import styles from './mangaPage.module.css'
import Image from "next/image"
import { FaStar} from 'react-icons/fa'
import Link from "next/link"


export default function MangaPage() {
    const[info, setInfo]  = useState([])
    const params = useParams()
    
    fetch(`https://api.jikan.moe/v4/manga/${params.id}`)
    .then(res => res.json())
    .then(res => {
        setInfo(res.data)
    })



    return (
        <>
            <div className={styles.info_container}>
                <Image src={info.images?.jpg?.image_url}  width={225} height={350} alt="Capa do manga" />
                <div className={styles.infos_manga}>
                    <div>
                        <h1>{info.title}</h1>
                        <li><FaStar /> <strong>{info.score}</strong></li>
                        <a href={info.url} target='_blank'>MyAnimeList</a>
                        <hr />
                        <p>{info.synopsis}</p>
                    </div>
                </div>
            </div>
            <h1 className={styles.caps_title}>Capitulos</h1>
            <ul className={styles.caps}>
                <Link href="/">
                    <li>one piece | 1084</li>
                </Link>
                <Link href="/">
                    <li>one piece | 1084</li>
                </Link>
                <Link href="/">
                    <li>one piece | 1084</li>
                </Link>
                <Link href="/">
                    <li>one piece | 1084</li>
                </Link>
            </ul>
        </>
    )
}