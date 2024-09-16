import styles from './cabecalho.module.css';
import { Link } from 'react-router-dom'


const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
        <div className={styles.logo}>
            <img src="/public/img/Porto_2022.svg.png" alt="Logo Porto Seguro" />
        </div>
        <div className={styles.menu}>
        <nav>
            <ul>
                <li><Link className={styles.home_nav} to="/">Home</Link></li>
                <li><Link className={styles.nav} to="/Diagnosticos">Diagnosticos</Link></li>
                <li><Link className={styles.oficina_nav} to="/Oficinas">Oficinas</Link></li>
                <li><Link className={styles.cadas_oficina_nav} to="/Cadastro">Cadastro</Link></li>
                <li><Link className={styles.intgrantes_nav} to="/Integrantes">Integrantes</Link></li>
            </ul>
        </nav>
    </div>
    </header>
    )
}
export default Cabecalho