"use client"

import styles from './navbar.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { FaStar} from 'react-icons/fa'

export default function Navbar() {
    const[mangaInfos, setMangaInfos] = useState([])
    const[showSearch, setShowSearch] = useState(false)

    function handleChange(e) {
        const value = e.target.value
        
        if(e.key == 'Enter') {
            fetch(`https://api.jikan.moe/v4/manga?q=${value}`)
            .then(res => res.json())
            .then(res => {
                setMangaInfos(res)
                setShowSearch(!showSearch)
            })
        }
    }

    return (
    <>
        <nav className={styles.navbar}>
        <div className={styles.logo}>
            <h1>Himeko</h1>
        </div>
        <div className={styles.search}>
            <input type="text" placeholder='Pesquise algo ...' onKeyDown={handleChange}/>
        </div>
        </nav>
        {showSearch == true ? (
            <div className={styles.searching}>
            <ul>
                {mangaInfos?.data?.map((data) => (
                    <>
                        <div key={data.mal_id}>  
                            <Image src={data.images.webp.image_url} alt={data.title} width={95} height={150}/>
                            <div>
                                <li><strong>{data.title}</strong></li>
                                <li><FaStar /> {data.score}</li>
                                <a href={data.url} target='_blank'>MyAnimeList</a>
                            </div>
                        </div>
                    </>
                ))}
            </ul>
        </div>
        ): ''}
    </>
    )
}