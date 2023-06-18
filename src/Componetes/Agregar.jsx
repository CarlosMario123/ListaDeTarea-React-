import { useState } from "react";

export function Agregar({settareas,tareas}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-black mb-6">Agregar tarea</h1>
      <AddTask settareas={settareas} tareas = {tareas}/>
    </div>
  );
}

function AddTask({settareas,tareas}) {

   const [nombre, setnombre] = useState("");
    const addTarea = (e)=>{
        e.preventDefault(); //previene el envio del formulario
        if ([nombre].includes("")) {
          alert("debes agregar una tarea")
          return;
        }


        //objeto de tipo tarea
        const task = {
            nombre,
            id:generarId()
        }

        //Agregar nueva tarea
        settareas([...tareas,task]);
        //reiniciar la tarea
        setnombre("");
    }

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        name=""
        id=""
        placeholder="¿Que tarea hay que hacer hoy?"
        className="border border-gray-400 p-1 rounded-lg w-96"
        value={nombre}
            onChange={(e) => {
              setnombre(e.target.value);
            }}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white p-1 rounded-lg w-24"
        onClick={addTarea}
      >
        Agregar
      </button>
    </div>
  );
}


//generador de id
const generarId = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
}