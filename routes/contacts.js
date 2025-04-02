const express = require('express');
const router = express.Router();

// Simulação de contatos
let contacts = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '(11) 99999-9999',
    company: 'Empresa A',
    status: 'lead',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '(11) 88888-8888',
    company: 'Empresa B',
    status: 'contact',
    createdAt: new Date(),
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

// Listar contatos
router.get('/', auth, (req, res) => {
  res.json(contacts);
});

// Criar contato
router.post('/', auth, (req, res) => {
  const newContact = {
    id: contacts.length + 1,
    ...req.body,
    createdAt: new Date(),
  };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Atualizar contato
router.put('/:id', auth, (req, res) => {
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) return res.status(404).json({ message: 'Contato não encontrado' });

  Object.assign(contact, req.body);
  res.json(contact);
});

// Deletar contato
router.delete('/:id', auth, (req, res) => {
  const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Contato não encontrado' });

  contacts.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
