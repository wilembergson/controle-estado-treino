import React from 'react' 
import { HashRouter, Route, Redirect } from 'react-router-dom'

import Todo from './todo/Todo'
import About from './about/About'

export default function Routes(){
    return(
        <HashRouter>
            <Route path='/todos' component={Todo}/>
            <Route path='/about' component={About}/>
            <Redirect from='*' to='/todos'/>
        </HashRouter>
    )
}