import { Tarea } from "./Tarea"
export function Listado({tareas,eliminarT}){
    
    return (

        <div className="flex items-center flex-col py-5">
            <h2 className="font-black mb-4">Tareas por cumplir({tareas.length})</h2>
           { tareas.map((tarea)=>{
            return <Tarea
            key={tarea.id}
            tarea={tarea} 
            eliminarT={eliminarT}/>
            
           })
        }
        </div>
       
    )

}