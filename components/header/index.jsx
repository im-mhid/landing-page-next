import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import Link from "next/link";
import Styles from "./header.module.scss";
import Button from "../button";

const Header = () => {
  return (
  <div className={Styles.container}>
    <div className={Styles.logotipo}>
      <Image src={Logo} alt="Logo" />
    </div>
    <div className={Styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/">O que fazemos</Link>
          <Link href="/">Cases</Link>
    </div>
    <div className={Styles.action}>
      <Button title="Fale conosco"/>
    </div>
  </div>
  )
}

export default Header;