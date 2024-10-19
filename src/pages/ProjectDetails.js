// ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../pages/ProjectDetails.module.css';
import wlnDesktop from '../imgProjects/WLNutrion_LandingPage.png';

import { IoHeart } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

import { BiLogoJavascript, BiLogoDjango } from "react-icons/bi";

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
            }
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
                        <div className={styles.sectionDetailsApresentationLikes}>
                            <IoHeart /> 10
                        </div>
                        <div className={styles.sectionDetailsApresentationViews}>
                            <FaEye /> 50
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
