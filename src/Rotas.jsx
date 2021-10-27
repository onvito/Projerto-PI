import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Partidos from './pages/Partidos';

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/partidos" component={Partidos} />
        </Switch>
    )
}

export default Rotas