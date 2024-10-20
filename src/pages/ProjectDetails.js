// ProjectDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../pages/ProjectDetails.module.css';
import wlnDesktop from '../imgProjects/WLNutrion_LandingPage.png';
import wlnLogin from '../imgProjects/WLN-LoginMobile.png';
import wlnHome from '../imgProjects/WLN-HomeMobile.png';
import wlnReceitas from '../imgProjects/WLN-ReceitasMobile.png';
import wlnCriandoReceitas from '../imgProjects/WLN-CriandoReceitaMobile.png';
import wlnCriandoIngredientes from '../imgProjects/WLN-CriandoIngredienteMobile.png';
import wlnCriandoReceitaPDF from '../imgProjects/WLN-CriandoReceitaPDFMobile.png';
import wlnContateNos from '../imgProjects/WLN-ContateNosMobile.png';
import wlnGerenciarConta from '../imgProjects/WLN-GerenciarContaMobile.png';

import { IoHeart } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoDjango } from 'react-icons/bi';
import axios from 'axios';

const projects = [
    {
        id: 1,
        title: 'WLNutrion',
        description: 'WLNutrion é um sistema web que permite a pequenos produtores de alimentos gerar tabelas nutricionais para seus produtos.',
        images: [
            wlnDesktop,
            wlnLogin,
            wlnHome,
            wlnReceitas,
            wlnCriandoReceitas,
            wlnCriandoIngredientes,
            wlnCriandoReceitaPDF,
            wlnContateNos,
            wlnGerenciarConta
        ],
        languages: {
            'Django': {
                icon: BiLogoDjango,
                style: 'badgeStyleDjango'
            },
            'JavaScript': {
                icon: BiLogoJavascript,
                style: 'styleJavascript'
            }
        }
    },
    {
        id: 2,
        title: 'Outro Projeto',
        description: 'Descrição completa de outro projeto.',
        images: []
    }
];

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));

    // Estado para likes e visualizações
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);

    useEffect(() => {
        if (!project) return;
        
        // Carregar os dados iniciais (likes e visualizações)
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(`/projetos/${project.id}`);
                setLikes(response.data.likes);
                setViews(response.data.views);

                await axios.post(`/projetos/${project.id}/view`);
                setViews(prevViews => prevViews + 1);
            } catch (error) {
                console.error('Erro ao carregar os dados do projeto:', error);
            }
        };

        fetchProjectData();
    }, [project]);

    const handleLike = async () => {
        try {
            await axios.post(`/projetos/${project.id}/like`);
            setLikes(prevLikes => prevLikes + 1);
        } catch (error) {
            console.error('Erro ao incrementar os likes:', error);
        }
    };

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <div className={styles.ProjectDetailsContainer}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className={styles.ProjectDetailsImageApresentation}>
                <img src={project.images[0]} alt="Projeto" />
            </div>
            <div className={styles.sectionDetailsApresentation}>
                <div className={styles.sectionDetailsApresentationContent}>
                    <div className={styles.badgesContainer}>
                        {project.languages && Object.entries(project.languages).map(([language, { icon: Icon, style }]) => (
                            <div key={language} className={`${styles.badgeDetailsLanguages} ${styles[style]}`}>
                                <Icon className={styles.iconStyle} />
                                {language}
                            </div>
                        ))}
                    </div>
                    <div className={styles.sectionDetailsApresentationReactions}>
                        <div className={styles.sectionDetailsApresentationLikes} onClick={handleLike}>
                            <IoHeart className={styles.iconLike} /> {likes}
                        </div>
                        <div className={styles.sectionDetailsApresentationViews}>
                            <FaEye /> {views}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sectionAboutProjectContainer}>
                {project.images.slice(1).map((image, index) => (
                    <div key={index} className={styles.sectionAboutProjectContent}>
                        <div className={styles.sectionAboutProjectImage}>
                            <img src={image} alt={`WLNutrion - imagem ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
