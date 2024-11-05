"use client"

import React, { useState } from 'react';
import styles from './oficinas.module.css';

const Oficinas = () => {
    type InfoOficinaType = {
        placa: string;
        ano: string;
        modelo: string;
        motorizacao: string;
        servico: string;
    }

    const [placa, setPlaca] = useState('');
    const [infoOficina, setInfoOficina] = useState<InfoOficinaType | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch(`/api/automoveis/${placa}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Dados recebidos da API:', result);
                setInfoOficina(result);
            } else {
                console.error('Erro ao obter os dados da API');
                setInfoOficina(null);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setInfoOficina(null);
        }
    };

    return (
        <main>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <div>
                    <label htmlFor="placa">Digite a placa:</label>
                    <input
                        type="text"
                        id="placa"
                        value={placa}
                        onChange={(e: ChangeEvent) => setPlaca(e.target?.value)}
                        placeholder="Ex: XYZ1234"
                        maxLength={7}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            <div className={styles.home}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991626110943!2d2.2919063764644085!3d48.85837007133224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1spt-PT!2sbr!4v1716333519458!5m2!1spt-PT!2sbr"
                    className={styles.iframe}
                    loading="lazy"
                ></iframe>

                <div className={styles.right_box}>
                    <p><strong>Informações da oficina selecionada:</strong></p>

                    {infoOficina ? (
                        <>
                            <p><strong>Nome:</strong> {infoOficina.placa}</p>
                            <p><strong>Endereço:</strong> {infoOficina.ano}</p>
                            <p><strong>Contato:</strong> {infoOficina.modelo}</p>
                            <p><strong>Contato:</strong> {infoOficina.motorizacao}</p>
                            <p><strong>Contato:</strong> {infoOficina.servico}</p>
                        </>
                    ) : (
                        <p>Selecione uma placa para visualizar as informações.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Oficinas;
