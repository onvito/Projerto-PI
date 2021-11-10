import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Deputados from './pages/Deputados';
import DeputadoDetalhe from './pages/DeputadoDetalhe';

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/deputados" component={Deputados} />
            <Route exact path="/deputados/:id" component={DeputadoDetalhe} />
        </Switch>
    )
}

export default Rotas