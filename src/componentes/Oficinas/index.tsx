import styles from './oficinas.module.css';

const Oficinas = () => {
    return (
        <main>
            <div className={styles.top_box}>
                <p>Seu diagnostico</p>
            </div>
            <div className={styles.home}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991626110943!2d2.2919063764644085!3d48.85837007133224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1spt-PT!2sbr!4v1716333519458!5m2!1spt-PT!2sbr"
                    className={styles.iframe}
                    loading="lazy"
                ></iframe>
                <section className={styles.informacoes}>
                    <p>
                        <strong>Encontre a oficina mais proxima</strong> <br />
                        Encontre a oficina mais proxima capaz de resolver seu problema
                    </p>
                </section>
                <div className={styles.right_box}>
                    <p>Informações da oficina selecionada</p>
                </div>
            </div>
        </main>
    );
};

export default Oficinas;
