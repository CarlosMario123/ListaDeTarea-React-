import { BotonDelete } from "./Eliminar";
import { useState } from "react"

export function Tarea({tarea,eliminarT}){
    const [id, setid] = useState(tarea.id);
  return <div className="flex flex-row  bg-slate-100 w-11/12 py-4 pl-7 mb-3 rounded-md shadow-xl justify-between pr-5">
     <DesingTask tarea ={tarea}/>
    <BotonDelete eliminarT={eliminarT} id={id}/> 
  </div>
}

function DesingTask({tarea}){
    return <div className="flex flex-row items-center">
    <div className="rounded-full bg-green-400 w-2 h-2 mr-2 mt-1"></div>
    <p>{tarea.nombre}</p>
    </div>
}