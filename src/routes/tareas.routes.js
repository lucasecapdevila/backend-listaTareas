import { Router } from "express";
import { crearTarea, editarTarea, eliminarTarea, listarTareas } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/tareas').get(listarTareas).post(crearTarea)
router.route('/tareas/:id').put(editarTarea).delete(eliminarTarea)

export default router