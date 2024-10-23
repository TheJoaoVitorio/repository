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

import carsDesktop from '../imgProjects/cars/carsDesktop.png'
import carsWhite from '../imgProjects/cars/carsWhite.png'
import carsWhiteModal from '../imgProjects/cars/carsWhiteModal.png'
import carsDark from '../imgProjects/cars/carsDark.png'
import carsDarkModal from '../imgProjects/cars/carsDarkModal.png'


import { IoHeart } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { FaUserLock, FaUtensils, FaClipboardList, FaUserEdit, FaFilePdf, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoDjango,BiLogoPython } from 'react-icons/bi';
import { SiBootstrap } from "react-icons/si";
import axios from 'axios';
import Stepper from '../components/Stepper';
import BtnBackToTop from '../components/BtnBackToTop';

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
        },
        'Python':{
            icon : BiLogoPython,
            style:'stylePython'
        }
      },
      features: [
        { name: 'Autenticação de Usuário', description: 'O sistema possui autenticação de usuários.', icon: FaUserLock },
        { name: 'Gerar Tabelas Nutricionais', description: 'Através da receita criada é possivel gerar o pdf da tabela nutricional.', icon: FaUtensils },
        { name: 'Gerenciamento de Ingredientes', description: 'Criar, editar e apagar ingredientes para utilizar nas receitas.', icon: FaClipboardList },
        { name: 'Customização de Perfil', description: 'Permite ao usuário personalizar seu perfil.', icon: FaUserEdit },
        { name: 'Geração de PDF', description: 'Gerar um PDF com os detalhes da tabela nutricional.', icon: FaFilePdf },
        { name: 'Suporte a PWA', description: 'O sistema é compatível com Progressive Web App.', icon: FaMobileAlt },
        { name: 'Envio de Email', description: 'Envio de emails utilizando protocolo SMTP.', icon: FaEnvelope }
      ]
    },
    {
      id: 2,
      title: 'Cars',
      description: 'Esse foi um dos meus primeiros projetos, no qual comecei a aprender JavaScript e Bootstrap.',
      images: [
        carsDesktop,
        carsDark,
        carsDarkModal,
        carsWhite,
        carsWhiteModal
      ],
      languages : {
        'JavaScript': {
            icon: BiLogoJavascript,
            style: 'styleJavascript'
        },
        'Bootstrap':{
            icon: SiBootstrap,
            style:'styleBootstrap'
        }
      },
    //   features : [{}]
    }
  ];

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));

    
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (!project) return;

        
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

        
        const isLiked = localStorage.getItem(`projeto_${project.id}_liked`);
        setLiked(isLiked === 'true');

        fetchProjectData();
    }, [project]);

    const handleLike = () => {
        
        if (liked) return;

        try {
            axios.post(`/projetos/${project.id}/like`);
            setLikes(prevLikes => prevLikes + 1);
            setLiked(true);

            localStorage.setItem(`projeto_${project.id}_liked`, 'true');
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
                        <div className={`${styles.sectionDetailsApresentationLikes} ${liked ? styles.liked : ''}`} onClick={handleLike}>
                            <IoHeart className={`${styles.iconLike} ${liked ? styles.liked : ''}`} /> {likes}
                        </div>
                        <div className={styles.sectionDetailsApresentationViews}>
                            <FaEye /> {views}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sectionAboutProjectTextContainer} >
                {/* <div className={styles.sectionAboutProjectTextContent} > */}
                        <Stepper 
                            tools={project.features}
                            title='Sobre o projeto'
                            isFeature={true}
                        />
                {/* </div> */}
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
            <BtnBackToTop/>
        </div>
        
    );
    
}
