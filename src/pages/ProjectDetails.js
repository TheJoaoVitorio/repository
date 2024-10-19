// ProjectDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../pages/ProjectDetails.module.css';
import wlnDesktop from '../imgProjects/WLNutrion_LandingPage.png';

import { IoHeart } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

import { BiLogoJavascript, BiLogoDjango } from "react-icons/bi";
import axios from 'axios'; // Biblioteca para fazer requisições HTTP

const projects = [
    {
        id: 1,
        title: 'WLNutrion',
        description: 'WLNutrion é um sistema web que permite a pequenos produtores de alimentos gerar tabelas nutricionais para seus produtos.',
        image1: wlnDesktop,
        languages: {
            'Django': {
                icon: BiLogoDjango,
                style: 'badgeStyleDjango'
            },
            'JavaScript': {
                icon: BiLogoJavascript,
                style: 'styleJavascript'
            },
        }
    },
    {
        id: 2,
        title: 'Outro Projeto',
        description: 'Descrição completa de outro projeto.',
        image1: '',
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
                // Faça a requisição para buscar os dados do projeto
                const response = await axios.get(`/projetos/${project.id}`);
                setLikes(response.data.likes);
                setViews(response.data.views);

                // Incrementar visualizações
                await axios.post(`/projetos/${project.id}/view`);
                setViews(prevViews => prevViews + 1);
            } catch (error) {
                console.error('Erro ao carregar os dados do projeto:', error);
            }
        };

        fetchProjectData();
    }, [project]);

    // Função para lidar com o clique no botão de like
    const handleLike = async () => {
        try {
            // Faça a requisição para incrementar o contador de likes
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
                <img src={project.image1} alt="Projeto" />
            </div>
            <div className={styles.sectionDetailsApresentation}>
                <div className={styles.sectionDetailsApresentationContent}>
                    <div className={styles.badgesContainer}>
                        {project.languages && Object.entries(project.languages).map(([language, { icon: Icon, style }]) => (
                            <div key={language} className={`${styles.badgeDetailsLanguages} ${styles[style]}`}>
                                <Icon className={styles.iconStyle} /> {/* Renderiza o ícone */}
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
        </div>
    );
}
