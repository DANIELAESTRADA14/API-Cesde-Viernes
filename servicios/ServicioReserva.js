import { modeloReserva } from "../models/reservaModelo.js";
import { ServicioHabitacion } from "./ServicioHabitacion.js";

export class ServicioReserva {
  constructor() {}

  async buscarTodos() {
    let reservas = await modeloReserva.find();
    return reservas;
  }

  async buscarPorId(id) {
    let reserva = await modeloReserva.findById(id);
    return reserva;
  }

  async registrar(datosPeticion) {

    let servicio = new ServicioHabitacion();
    let habitacion = await servicio.buscarPorId(datosPeticion.idHabitacion);
    let fechaIngreso = new Date(datosPeticion.fechaIn);
    let fechaSalida = new Date(datosPeticion.fechaOut);
  
    let difference = Math.abs(fechaSalida - fechaIngreso);
    let days = difference / (1000 * 3600 * 24);
    let costo = days * habitacion.precio;
    
    let reservaModelo = {
      idCliente : datosPeticion.idCliente,
      fechaIn: datosPeticion.fechaIn,
      fechaOut: datosPeticion.fechaOut,
      numPersonas: datosPeticion.numPersonas,
      id_hab: datosPeticion.idHabitacion,
      costo: costo
    };

    let habitacionaRegistrar = new modeloReserva(reservaModelo)
    return await habitacionaRegistrar.save();
  }

  async editar(id, datosPeticion) {
    return await modeloReserva.findByIdAndUpdate(id, datosPeticion);
  }

  async eliminar(id) {
    return await modeloReserva.findByIdAndDelete(id);
  }

  
}
