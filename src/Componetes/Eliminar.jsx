export function BotonDelete({eliminarT,id}){
    function borrar(){
       eliminarT(id)
    }
   
    return <button className="bg-red-600 text-white w-24 rounded-md" onClick={borrar}>Eliminar</button>;
}