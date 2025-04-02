const express = require('express');
const router = express.Router();

// Simulação de tarefas
let tasks = [
  {
    id: 1,
    title: 'Ligar para João Silva',
    description: 'Agendar reunião para apresentação do produto',
    dueDate: new Date('2025-04-03'),
    status: 'pending',
    contactId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'Enviar proposta para Maria Santos',
    description: 'Enviar documento de proposta comercial',
    dueDate: new Date('2025-04-04'),
    status: 'pending',
    contactId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Middleware de autenticação
const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Listar tarefas
router.get('/', auth, (req, res) => {
  res.json(tasks);
});

// Criar tarefa
router.post('/', auth, (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Atualizar tarefa
router.put('/:id', auth, (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });

  Object.assign(task, req.body);
  task.updatedAt = new Date();
  res.json(task);
});

// Deletar tarefa
router.delete('/:id', auth, (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Tarefa não encontrada' });

  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
