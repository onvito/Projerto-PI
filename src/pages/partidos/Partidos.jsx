import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from "../../components/Box";

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
              <div className="col text-center">
              <Card.Body>
                <Box title={partidos.nome}>
                <p>
                Partido: {partidos.nome}
                </p>
                <p>
                  Sigla: {partidos.sigla}  
                </p>
                <Link to={"/partidos/" + partidos.id}>
                  <Button className="btn btn-success"> Detalhes</Button>       
              </Link>
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

export default Partidos