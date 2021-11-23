import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Deputados from './pages/Deputados/Deputados';
import DeputadoDetalhe from './pages/Deputados/DeputadoDetalhe';
import Partidos from './pages/partidos/Partidos';
import PartidoDetalhe from "./pages/partidos/PartidoDetalhe"
import Votação from './pages/votação/Votação';
import Orgãos from './pages/orgaos/Orgãos';
import Eventos from './pages/eventos/Eventos'

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/deputados" component={Deputados} />
            <Route exact path="/deputados/:id" component={DeputadoDetalhe} />
            <Route exact path="/partidos" component={Partidos} />
            <Route exact path="/partidos/:id" component={PartidoDetalhe} />
            <Route exact path="/votacoes" component={Votação} />
            <Route exact path="/orgaos" component={Orgãos} />
            <Route exact path="/eventos" component={Eventos} />

 
        </Switch>
    )
}

export default Rotas