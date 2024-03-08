const express = require('express');
const morgan = require('morgan');
const TaskModel = require('./models/taskSchema.js');
const router = express.Router();
const PORT = 3002;
const app = express();
require('./database/config.js');

app.use(express.json());
app.use(morgan('dev'));

app.post('/NewTask', async (req, res) => {
  const newTask = {
    name: req.body.name,
  };
  const taskCreate = new TaskModel(newTask);
  taskCreate.save();
  res.status(200).json({
    message: 'tarea cargada en la BD',
  });
});

app.get('/Task', async (req, res) => {
  const task = await TaskModel.find();
  res.status(200).json(task);
});

app.get('/Task/:id', async (req, res) => {
  const idTask = req.params.id;
  const task = await TaskModel.findById(idTask);
  res.status(200).json(task);
});

app.listen(PORT, () => {
  console.log('backend ejecutandose en el puerto ' + PORT);
});
