import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Deputados from './pages/Deputados/Deputados';
import DeputadoDetalhe from './pages/Deputados/DeputadoDetalhe';
import Partidos from './pages/partidos/Partidos';
import DetalhePartido from "./pages/partidos/DetalhePartido"

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/deputados" component={Deputados} />
            <Route exact path="/deputados/:id" component={DeputadoDetalhe} />
            <Route exact path="/partidos" component={Partidos} />
            <Route exact path="/partidos/:id" component={DetalhePartido} />

 
        </Switch>
    )
}

export default Rotas