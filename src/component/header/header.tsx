import Image from "next/image";
import styles from "./header.module.css"; 

import { Button } from '../button/button'

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <h1>
          <Image src="./logo.svg"
          width={128}
          height={43}
          alt="Protetoras em Ação" />
        </h1>
        <nav>
          <ul className={styles.list}>
            <li>Sobre o projeto</li>
            <li>Realize uma ajuda</li>
            <li>
              <Button label="Adote um bichinho" type="button" variant="primary"/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
