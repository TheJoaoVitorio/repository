const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


let projects = [
    { id: 1, title: 'WLNutrion', description: 'Projeto WLNutrion', likes: 10, views: 500 },
    { id: 2, title: 'Outro Projeto', description: 'Descrição do Outro Projeto', likes: 5, views: 100 }
];


app.get('/projetos/:id', (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    if (project) {
        res.json(project);
    } else {
        res.status(404).send('Projeto não encontrado');
    }
});


app.post('/projetos/:id/view', (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    if (project) {
        project.views += 1;
        res.json({ views: project.views });
    } else {
        res.status(404).send('Projeto não encontrado');
    }
});


app.post('/projetos/:id/like', (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    if (project) {
        project.likes += 1;
        res.json({ likes: project.likes });
    } else {
        res.status(404).send('Projeto não encontrado');
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
