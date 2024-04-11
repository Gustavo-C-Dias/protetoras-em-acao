'use client'
import React, { useState } from 'react'
import Image from "next/image"
import styles from "./header.module.css"

import { Button } from '../button/button'
import { Link } from '../link/link' 

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };


  return (
    <header className={styles.wrapper}>
      <div className={`${styles.content} ${styles.breakpoint_header}`}>
        <h1>
          <Image src="./logo.svg"
          width={128}
          height={43}
          alt="Protetoras em Ação" />
        </h1>
        <nav className={styles.desktop}>
          <ul className={styles.list}>
            <li>
              <Link url="#section_sobre" label="Sobre o projeto" />
            </li>
            <li>
              <Link url="#section_ajuda" label="Realize uma ajuda" />
            </li>
            <li>
              <Button label="Adote um bichinho" type="a" variant="primary" url="#section_adocao"/>
            </li>
          </ul>
        </nav>
        <button className={styles.mobile} onClick={toggleOverlay}>
          {!isOverlayOpen ? (
            <Image src={'./menu.svg'} alt="" width={40} height={40}/>
          ) : (
            <Image src={'./close.svg'} alt="" width={40} height={40}/>
          )}
        </button> 

        <div className={`${styles.overlay} ${isOverlayOpen ? styles.overlayOpen : ''}`}>
          <nav>
            <ul className={styles.list_mobile}>
              <li>
                <Link url="#section_sobre" label="Sobre o projeto" size="medium" onClick={toggleOverlay} />
              </li>
              <li>
                <Link url="#section_ajuda" label="Realize uma ajuda" size="medium" onClick={toggleOverlay} />
              </li>
              <li>
                <Button label="Adote um bichinho" type="a" variant="primary" url="#section_adocao" size='medium' onClick={toggleOverlay}/>
              </li>
            </ul>
          </nav>
        </div> 
      </div>
    </header>
  )
}