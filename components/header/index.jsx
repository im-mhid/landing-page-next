import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
  <div className={styles.container}>
    <div className={styles.logotipo}>
      <Image src={Logo} />
    </div>
    <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/">O que fazemos</Link>
          <Link href="/">Cases</Link>
    </div>
    <div className={styles.action}>
      <button className={styles.button}>Fale conosco</button>
    </div>
  </div>
  )
}

export default Header;