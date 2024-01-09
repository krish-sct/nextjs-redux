import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../../public/assets/e-con-twenty-years-logo.svg";

export const metadata = {
  title: "EconSystems",
};

export default async function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Econ systems</h1>
      </div>
      <Image
        src={Logo}
        alt="E-Con Twenty Years Logo"
        className={styles.img}
        priority="false"
      ></Image>
    </div>
  );
}
