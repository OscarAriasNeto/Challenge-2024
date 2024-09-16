import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.overlay}>
                <section className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <h2>Sobre nós</h2>
                        <img className={styles.cardImage} src="/img/carro.png" alt="Carro 1"/>
                        <p>A Porto Seguro Automóveis é uma das maiores seguradoras do Brasil, reconhecida pela sua ampla cobertura e serviços diferenciados. Fundada em 1945, a empresa oferece uma vasta gama de seguros para automóveis.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h2>Para oficinas</h2>
                        <img className={styles.cardImage} src="/img/renegate.avif" alt="Carro 2"/>
                        <p>A Porto Seguro Automóveis é uma das maiores seguradoras do Brasil, reconhecida pela sua ampla cobertura e serviços diferenciados. Fundada em 1945, a empresa oferece uma vasta gama de seguros para automóveis.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h2>Para você</h2>
                        <img className={styles.cardImage} src="/img/carrofiat.png" alt="Carro 3"/>
                        <p>A Porto Seguro Automóveis é uma das maiores seguradoras do Brasil, reconhecida pela sua ampla cobertura e serviços diferenciados. Fundada em 1945, a empresa oferece uma vasta gama de seguros para automóveis.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home