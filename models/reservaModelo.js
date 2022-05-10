import mongoose from 'mongoose';

let Schema = mongoose.Schema

let Reserva = new Schema({
    idCliente: {
        type: Number,
        required:true
    },

    fechaIn: {
        type: Date,
        required: true
    },

    fechaOut:{
        type: Date,
        required: true
    },

    costo: {
        type: Number,
        required:true
    },

    numPersonas: {
        type: Number,
        required:true
    }
})

export let modeloReserva = mongoose.model('reservas', Reserva)