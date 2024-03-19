import Tarea from "../database/models/tarea.js";

export const listarTareas = async(req, res) => {
  try {
    const listaTareas = await Tarea.find()
    res.status(200).json(listaTareas)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Se produjo un error al buscar las tareas'
    })
  }
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

export const editarTarea = async(req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id)
    if(!tareaBuscada){
      return res.status(404).json({
        mensaje: 'No se encontró la tarea con el ID especificado.'
      })
    }
    await Tarea.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      mensaje: 'La tarea se editó exitosamente.'
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Ocurrió un error. No se pudo editar la tarea'
    })
  }
}

export const eliminarTarea = async(req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id)
    if(!tareaBuscada){
      return res.status(404).json({
        mensaje: 'No se pudo eliminar la tarea con el ID especificado.'
      })
    }
    await Tarea.findByIdAndDelete(req.params.id)
    res.status(200).json({
      mensaje: 'La tarea se eliminó exitosamente.'
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Ocurrió un error. No se pudo eliminar la tarea'
    })
  }
}