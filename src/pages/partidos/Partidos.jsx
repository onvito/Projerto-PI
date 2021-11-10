import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import apiGov from "../../services/apiGov";

const Partidos = (props) => {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
   

    apiGov.get('/partidos').then(resultado => {
      setPartidos(resultado.data.dados)
  })
  }, [props]);

  console.log(partidos)

return (
  <>
      
      <Container>
        <h1>Partidos</h1>
        <br />
        <Row>
          {partidos.map((partidos) => (
            <Col key={partidos.id} md={3} className="md-3">
              
              <Card.Body>
                <p>
                Partido: {partidos.nome}
                </p>
                       
                <hr />
                  <p>
                  Sigla: {partidos.sigla}  
                  </p>
                  
                  
              </Card.Body>

              <Link to={"/partidos/" + partidos.id}>
                  <Button className="btn btn-success"> Detalhes</Button>       
              </Link>
              <hr />
            </Col>
          ))}
        </Row>
          
      </Container>
    </>
)};

export default Partidos