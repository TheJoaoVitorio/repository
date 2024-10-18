// ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'Wlnutrion',
        description: 'Descrição completa do projeto Wlnutrion.',
    },
    {
        id: 2,
        title: 'Outro Projeto',
        description: 'Descrição completa de outro projeto.',
    }
];

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    );
}
