import { BASE_URL } from "../assets/baseCondig"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
        <header className={styles["header"]}>
            <div className={styles["logo"]}>
                <img src={BASE_URL + "logo-ceniteg-black.png"} alt="" />
            </div>
            <div className={styles["navbar-container"]}>
                <nav className={styles["navbar"]}>
                    <div>Servicios</div>
                    <div>Proyectos</div>
                    <div>Acerca</div>
                </nav>
            </div>
            <div>
                <div>
                    <button>Contacto</button>
                </div>
            </div>
        </header>
    </>
  )
}
