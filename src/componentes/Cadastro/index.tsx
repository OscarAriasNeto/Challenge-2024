import React, { useState } from 'react';
import styles from './cadastro.module.css';

interface FormData {
    nomeOficina: string;
    cnpj: string;
    email: string;
    telefone: string;
    tipo: string;
    endereco: string;
}

const Cadastro = () => {
    const [mensagemSucesso, setMensagemSucesso] = useState<string>('');
    const [formData, setFormData] = useState<FormData>({
        nomeOficina: '',
        cnpj: '',
        email: '',
        telefone: '',
        tipo: '',
        endereco: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.currentTarget;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();

        if (Object.values(formData).some(value => value === '')) {
            alert('Preencha todos os campos obrigatórios.,');
            return;
        }

        const token = gerarTokenAleatorio();
        console.log('Token gerado:', token);

        try {
            const response = await fetch('https://sua-api.com/oficinas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Falha ao enviar os dados');
            }


            const data = await response.json();
            console.log('Resposta da API:', data);


            exibirMensagemSucesso();
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar os dados. Tente novamente.');
        }
    };

    const gerarTokenAleatorio = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 16; i++) {
            token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return token;
    };

    const exibirMensagemSucesso = () => {
        setMensagemSucesso('Cadastro realizado com sucesso!');
    };

    return (
        <main>
            <div className={styles.home}>
                <section className={styles.informacoes}>
                    <h1>Cadastre também a sua oficina</h1>
                    {mensagemSucesso && <div className={styles.mensagemSucesso}>{mensagemSucesso}</div>}
                </section>
            </div>
            <div className={styles.container}>
                <form className={styles.formulario} onSubmit={handleFormSubmit}>
                    <div className={styles.form_group}>
                        <label htmlFor="nomeOficina">Nome da Oficina</label>
                        <input
                            type="text"
                            id="nomeOficina"
                            value={formData.nomeOficina}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="cnpj">CNPJ</label>
                        <input
                            type="text"
                            id="cnpj"
                            value={formData.cnpj}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="email">Email para contato</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="telefone">Telefone para contato</label>
                        <input
                            type="text"
                            id="telefone"
                            value={formData.telefone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="tipo">Tipo de Oficina</label>
                        <input
                            type="text"
                            id="tipo"
                            value={formData.tipo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="endereco">Endereço</label>
                        <input
                            type="text"
                            id="endereco"
                            value={formData.endereco}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </main>
    );
};

export default Cadastro;
