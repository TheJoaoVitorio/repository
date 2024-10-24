const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const routes = express.Router();

prisma.$connect()
  .then(() => console.log('Prisma conectado com sucesso!!!'))
  .catch(err => console.error('Erro ao conectar Prisma:', err));


// GET - Buscar projeto por ID e Contabiliza a view;
routes.get('/projetos/:id/view', async (req, res) => {
    try {
        const { id } = req.params;
        const intId = parseInt(id);

        if (isNaN(intId)) {
            return res.status(400).json({ error: "ID deve ser um número válido" });
        }

        const projectExists = await prisma.Project.findUnique({
            where: { id: intId }
        });

        if (!projectExists) {
            return res.status(404).json({ error: "Projeto não encontrado" });
        }

        // Atualiza as visualizações do projeto
        const updateViewsProject = await prisma.Project.update({
            where: { id: intId },
            data: {
                views: projectExists.views + 1
            }
        });

        return res.status(200).json(updateViewsProject);
    } catch (error) {
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});


// POST - Criar Projetos
routes.post("/createproject", async (req, res) => { 
    try {
        const { name, description } = req.body;

        const project = await prisma.Project.create({
            data: {
                name,
                description
            }
        });

        return res.status(201).json(project);

    } catch (error) {
     
        console.error('Erro:', error);
        return res.status(500).json({ 
            error: error.message || "Erro interno do servidor" 
        });
    }
});


// POST - Like Projeto
routes.post("/projetos/:id/like", async (req, res) => {
    const { id } = req.params;
    const intId = parseInt(id);

    if (isNaN(intId)) {
        return res.status(400).json({ error: "ID deve ser um número válido" });
    }

    const projectExists = await prisma.Project.findUnique({
        where: { id: intId }
    });

    if (!projectExists) {
        return res.status(404).json({ error: "Projeto não encontrado" });
    }

    const updateLikesProject = await prisma.Project.update({
        where: {id:intId},
        data: {
            likes: projectExists.likes + 1
        }
    })

    return res.status(200).json(projectExists)

} )


module.exports = routes;