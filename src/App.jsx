import { Agregar } from "./Componetes/Agregar";
import { useState } from "react";
import { Listado } from "./Componetes/ListarTareas";
export function App(){
  const [tareas, settareas] = useState([]);
  const eliminarTarea = (id)=>{
    const tareasActualizdo = tareas.filter(tarea => tarea.id != id);
      settareas(tareasActualizdo);
  }
   return <div className="flex items-center justify-center">
   <div className="b border border-gray-300 border-2 w-1/2 rounded-xl mt-6 shadow-xl">
    <Agregar settareas = {settareas} tareas={tareas}/>
    <Listado tareas={tareas} eliminarT={eliminarTarea}/> 
   </div>
   </div>
}

