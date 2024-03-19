import Tarea from "../database/models/tarea.js";

export const listarTareas = (req, res) => {
  console.log('Preparo la lista de tareas');
  res.send('Lista de tareas enviada')
}

export const crearTarea = async(req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body)
    await nuevaTarea.save()
    
    res.status(201).json({
      mensaje: 'La tarea fue creada exitosamente.'
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: 'La tarea no pudo ser creada'
    })
  }
}