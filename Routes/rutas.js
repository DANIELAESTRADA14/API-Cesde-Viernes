import express from "express";
import { ControladorReserva } from "../Controller/controlador.js";
import { ControladorHabitacion} from "../Controller/Controller.js";


let controlador = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()


export let rutas = express.Router();

rutas.get('/API/v1/viernes', controlador.buscarTodos)
rutas.get('/API/v1/viernes/:id', controlador.buscarPorId)
rutas.post('/API/v1/viernes',controlador.insertar)
rutas.put('/API/v1/viernes/:id', controlador.editar)
rutas.delete('/API/v1/viernes/:id', controlador.eliminar)

rutas.get('/API/v1/viernesreserva', controladorReserva.buscarTodos)
rutas.get('/API/v1/viernesreserva/:id', controladorReserva.buscarPorId)
rutas.post('/API/v1/viernesreserva',controladorReserva.insertar)
rutas.put('/API/v1/viernesreserva/:id', controladorReserva.editar)
rutas.delete('/API/v1/viernesreserva/:id', controladorReserva.eliminar)

