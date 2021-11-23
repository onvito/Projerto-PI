
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Box from "../../components/Box";

import apiGov from "../../services/apiGov";

const Votação = (props) => {
  const [Votação, setVotação] = useState([]);

  useEffect(() => {
   

    apiGov.get('/votacoes').then(resultado => {
      setVotação(resultado.data.dados)
  })
  }, [props]);

  console.log(Votação)

return (
  <>
      
        <Container>
        <h1>Votação</h1>
        <br />
        <Row>
          {Votação.map((votacoes) => (
            <Col key={votacoes.id} md={3} className="md-3">
              <div className="col text-center">
              <Card.Body>
              <Box title={votacoes.data}>
         
                <hr />
                  <p>
                 Horário de Registro: {votacoes.dataHoraRegistro}  
                  </p> <hr />
                  <p>
                    Descrição: {votacoes.descricao}
                  </p> <hr />
                  <p>
                    Sigla do Orgão: {votacoes.siglaOrgao}
                  </p>
                  
             
                  
                  </Box> 
                  
              </Card.Body>
              </div>
              
              <hr />
            </Col>
          ))}
        </Row>
        </Container>  
    </>
)};

export default Votação