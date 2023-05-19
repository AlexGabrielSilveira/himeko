'use client';

// imports
import styles from './manga.module.css'
import { useEffect, useState } from 'react'

export default function Manga() {
    const[mangas, setMangas] = useState([])

      useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime?q=one piece&sfw')
        .then(res => res.json())
        .then(res => {
            let fetchResponse = res.data
            let images = fetchResponse.map((item) => {
              return {
                image: item.images.jpg.image_url
              }
            })

            setMangas(images)
        })
        
      }, [])
    return (
      <div className={styles.mangas}>
          {mangas.map((images) => (
            <div className={styles.card_manga}>
                <img src={images.image} />
                <div className={styles.mangas_infos}>
                  <p className={styles.manga_name}><strong>One Piece</strong></p>
                  <p>MAL</p>
                  <p className={styles.note}>⭐10</p>
                  <p>descrição: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ut architecto suscipit, quia, animi, pariatur quam fugiat vero consequatur cumque ullam illum ab mollitia harum debitis hic aut reprehenderit molestiae.</p>
                </div>
            </div>
          ))}
      </div>
    )
  }
  