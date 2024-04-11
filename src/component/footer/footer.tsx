import Image from "next/image";
import styles from "./footer.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={`${styles.content} ${styles.breakpoint_footer}`}>
        <Image src={"./logo.svg"} alt="Protetoras em Ação" width={256} height={86} />
        <div className={styles.content_text}>
          <p className={styles.text_footer}>CNPJ: 42.880.314/0001-76</p>
          <div className={styles.link_footer}>
            <a href="hhttps://www.facebook.com/animaisitapema/">
              <Image src={'./facebook.svg'} alt="Facebook" width={44} height={44}/>
            </a>
            <a href="https://www.instagram.com/protetoras_itp/">
              <Image src={'./instagram.svg'} alt="Instagram" width={44} height={44}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
