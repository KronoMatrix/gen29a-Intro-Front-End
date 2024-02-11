import { useState } from 'react'

const ToDoList = () => {
    // text es el valor del input
    // setText es la función que actualiza el valor de text
    const [text, setText] = useState('')

    const [tareas, setTareas] = useState([])

    const handlerChangeText = (e) => {
        console.log(e.target.value);
        setText(e.target.value)
    }

    const handlerOnClickButton = () => {
        // Se trae la información existente de tareas y se le agrega el nuevo valor
        // Opcion 1 con spread operator para agregar el nuevo valor
        //const newTareas = [...tareas, text]

        // Opcion 2 con push para agregar el nuevo valor
        const newTareas = tareas
        newTareas.push(text)

        console.log(newTareas) [ 'Lavar platos'];
        setTareas(newTareas)
        setText('')
        
    }

    return (
        <>
            <h1>ToDoList</h1>
            <input
                type="text"
                placeholder="Añadir tarea"
                value={text}
                onChange={handlerChangeText}
            />
            <button onClick={handlerOnClickButton}>Agregar</button>
            <ul>
                {tareas.map((tarea, index)=> 
                <li>
                    {tarea} <button onClieck={handlerOnClickDelete}></button>
                </li>
                 )}
            </ul>
        </>
    )
}

export default ToDoList