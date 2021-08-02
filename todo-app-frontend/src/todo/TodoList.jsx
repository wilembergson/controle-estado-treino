import React from 'react' 
import IconButton from '../template/IconButton'
export default function TodoList(props){
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo.index}>
                <td className={todo.done ? "markedAsDone" : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                                onClick={() => props.handleMarkAsDone(todo)}></IconButton>

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                                onClick={() => props.handleMarkAsPending(todo)}></IconButton>

                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                                onClick={() => props.handleRemove(todo.id)}></IconButton>
                </td>
            </tr>
        ))
    }
    
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}