import styles from './diagnosticos.module.css';

const Diagnosticos = () => {
    return (
        <main>
            <div className={styles.home}>
                <div className={styles.conteiner}>
                    <img src="/public/img/carro-pelado.png" alt="Imagem representando o carro da pessoa" />
                </div>
                <div className={styles.chatbot}>
                    <p>CHATBOT</p>
                </div>
            </div>
                <div className={styles.informacoes}>
                    <p><strong>Converse com nosso bot</strong> <br /> 
                    Explique o problema para nosso bot, assim ele podera lhe dar um pré diagnostico do seu problema e uma previsão de valor</p>
                </div>
        </main>
        );
    }
export default Diagnosticos