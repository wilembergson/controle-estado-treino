import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { changeDescription } from './TodoActions'

const TodoForm = props => {
    return(
        <div role='form' className="todoForm">

            <Grid cols='12 9 10'>
                <input id='description' className="form-control" 
                        placeholder="Adicione uma tarefa."
                        onChange={props.changeDescription}
                        value={props.description}/>
            </Grid>
            

           <Grid cols='12 3 2'>
                <IconButton style="primary" icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style="secondary" icon='close' onClick={props.handleClear}></IconButton>
                <IconButton style="info" icon='eye' onClick={props.handleShow}></IconButton>
           </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)