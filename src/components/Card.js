import styles from '../components/Card.module.css';
import gifHorizontal from '../gifProjects/Wlnutrion.gif'
//import gifVertical from '../gifProjects/WLN-mobile-GIF-ezgif.com-speed.gif'
import gifMobile from '../gifProjects/WLN-mobile2.gif'
import React, { useState, useEffect } from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

import 'animate.css/animate.min.css'; 


export default function Card() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Função para atualizar o tamanho da tela
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Adiciona o evento de redimensionamento
        window.addEventListener('resize', handleResize);

        // Remove o evento de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.Card}>
            <div className={`${styles.CardHeader} animate__animated animate__flash animate__infinite animate__delay-5s animate__slower `}>
                <div className={styles.CardHeaderContent}>
                    <h1>Projetos</h1>
                </div>                
            </div>
            <div className={styles.CardContainerContent} >
                <button className={styles.BackProject} > <IoChevronBackOutline /> </button>
                    <div className={styles.CardContent} >
                        {windowSize.width > 768 ? (
                            <img className={styles.GifDesktop} src={gifHorizontal} ></img>
                        ) : (
                            <img className={styles.GifMobile}  src={gifMobile} ></img>
                        )}
                    </div>
                <button className={styles.NextProject} > <IoChevronForwardOutline style={{ width: '300px' }} /> </button>
            </div>
        </div>
    );
}
{/* Adapte os elementos conforme o tamanho da tela */}
 