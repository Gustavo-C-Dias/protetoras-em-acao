import Image from "next/image";
import styles from "./footer.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <Image src={"./logo.svg"} alt="Protetoras em Ação" width={256} height={86} />
        <div>
          <p>CNPJ: 42.880.314/0001-76</p>
          <p>Localização</p>
        </div>
      </div>
    </footer>
  )
}
