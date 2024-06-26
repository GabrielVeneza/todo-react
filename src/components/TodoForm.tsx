import React from 'react'
import { useState } from 'react'


const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        if (!value || !category) return
        addTodo(value, category)
        setValue("")
        setCategory("")

        console.log(value, category)
    }

  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handlesubmit}>
            <input 
                type="text" 
                value={value}
                placeholder='Digite o título...' 
                onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option>Trabalho</option>
                <option>Pessoal</option>
                <option>Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm