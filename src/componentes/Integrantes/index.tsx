import styles from './integrantes.module.css';
const Integrantes = () => {
    return (
        <main className={styles.baixo}>
            <section className={styles.informacoes}>
                <div className={styles.Lucas}>
                    <img src="/img/ft-lucas.jpg" alt="Foto do integrante Lucas" />
                    <p>Lucas Rodrigues de Souza<br />
                        RM - 557951 - 1TDSPO<br />
                        https://github.com/Lucasrodrigues0101
                    </p>
                </div>
                <div className={styles.Oscar}>
                    <img src="/img/ft-oscar.jpg" alt="Foto do integrante Oscar" />
                    <p>Oscar Arias Neto <br />
                        RM - 556936 - 1TDSPO <br />
                        https://github.com/OscarAriasNeto</p>
                </div>
                <div className={styles.Nicolas}>
                    <img src="/img/ft-nicolas.jpg" alt="Foto do integrante Nicolas" />
                    <p>Nicolas Souza dos Santos <br />
                        RM - 555571 - 1TDSPO <br />
                        http://github.com/nicolassouzasantos</p>
                </div>
            </section>
        </main>
    )
}

export default Integrantes