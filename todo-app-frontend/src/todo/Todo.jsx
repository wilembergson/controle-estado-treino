import React, { useState } from 'react' 
import axios from 'axios'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function Todo(){

    const URL = 'http://localhost:8080/todoApp/task'

    const [description, setDescription] = useState('')
    const  [list, setList] = useState([])

    function handleChange(e){
        setDescription(e.target.value)
    }

    function handleAdd(){
       const descriptionCopy = description
       console.log(descriptionCopy)
       axios.post(URL, {description:descriptionCopy})
        .then(resp => {
            refresh()
        })
    }

    function refresh(){
        axios.get(`${URL}/listAll?sort=-createdAt`)
            .then(resp => {
                setDescription('')
                setList(resp.data)
            })
    }

    function handleClear(){
        refresh()
    }

    function handleRemove(id){
        axios.delete(`${URL}/${id}`)
            .then(resp => refresh())
    }

    function handleMarkAsDone(todo){
        axios.put(`${URL}/${todo.id}`, {...todo, done: true})
            .then(resp => refresh())
    }

    function handleMarkAsPending(todo){
        axios.put(`${URL}/${todo.id}`, {...todo, done: false})
            .then(resp => refresh())
    }

    return(
        <div>
            {/*{refresh()}*/}
            <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            
            <TodoForm handleAdd={handleAdd}
                        description={description}
                        handleChange={handleChange}
                        handleShow={refresh}
                        handleClear={handleClear}/>

            <TodoList list={list}
                        handleRemove={handleRemove}
                        handleMarkAsDone={handleMarkAsDone}
                        handleMarkAsPending={handleMarkAsPending}
                        handleRemove={handleRemove}/>
        </div>
    )
}