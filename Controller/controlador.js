import { ServicioReserva } from "../servicios/ServicioReserva.js";


export class ControladorReserva {
    constructor(){}

   async buscarTodos(request,response){
        let servicio = new ServicioReserva(); //se instancia class servicio
        try{
 
            response.status(200).json({
                mensaje: "Exito en la busqueda",
                data: await servicio.buscarTodos(),
                estado: true
     
            })
     
        }catch(error){
             response.status(400).json({
                mensaje: (`Upss! Hubo un problema ${error}`),
                data: [],
                estado: false
         })
      
        }
    
    }

   async buscarPorId(request,response){
        //aca va operacion en reservar hab los calculos
        let servicio = new ServicioReserva();
        let id = request.params.id

        console.log(`El id solicitado es ${id}`);

        try{
            response.status(200).json({
                mensaje: "Exito en la busqueda por id: " + id,
                data: await servicio.buscarPorId(id),
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema" + error,
                 data: [],
                 estado: false
          })
     
         }
    }

    async insertar(request,response){
        let servicio = new ServicioReserva();
        let datosPeticion = request.body
        console.log(datosPeticion)
        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "Exito en la actualizaciòn",
                data: datosPeticion,
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema" + error,
                 data: [],
                 estado: false
          })
     
         }
    }

    async editar(request,response){
        let servicio = new ServicioReserva();
        let id= request.params.id
        let datosPeticion = reques.body
        
        try{
            await servicio.editar(id, datosPeticion)
            response.status(200).json({
                mensaje: "Exito en la ediciòn",
                data: null,
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema",
                 data: [],
                 estado: false
          })
     
         }
    }

  async eliminar(request,response){
      let id = reque.params.id
      let servicio = new ServicioReserva();
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje: "Exito eliminando la información",
                data:null,
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema",
                 data: [],
                 estado: false
          })
     
         }
    }
}