const express = require('express');
const router = express.Router();

// Simulação de oportunidades
let deals = [
  {
    id: 1,
    name: 'Venda de Software',
    value: 15000,
    stage: 'negotiation',
    contactId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Consultoria',
    value: 5000,
    stage: 'qualification',
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

// Listar oportunidades
router.get('/', auth, (req, res) => {
  res.json(deals);
});

// Criar oportunidade
router.post('/', auth, (req, res) => {
  const newDeal = {
    id: deals.length + 1,
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  deals.push(newDeal);
  res.status(201).json(newDeal);
});

// Atualizar oportunidade
router.put('/:id', auth, (req, res) => {
  const deal = deals.find(d => d.id === parseInt(req.params.id));
  if (!deal) return res.status(404).json({ message: 'Oportunidade não encontrada' });

  Object.assign(deal, req.body);
  deal.updatedAt = new Date();
  res.json(deal);
});

// Deletar oportunidade
router.delete('/:id', auth, (req, res) => {
  const index = deals.findIndex(d => d.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Oportunidade não encontrada' });

  deals.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
