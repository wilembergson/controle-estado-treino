import React from 'react' 

export default function Menu(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">TodoApp</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#/todos">Tarefas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/about">Sobre</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}

/*<nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-calendar-check-o"/> TodoApp
                    </a>
                </div>

                <div id='navbar' className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#/todos"></a>Tarefas</li>
                        <li><a href="#/about">Sobre</a></li>
                    </ul>
                </div>
            </div>
    </nav> */