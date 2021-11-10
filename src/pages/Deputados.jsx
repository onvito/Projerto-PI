import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import apiGov from "../services/apiGov";

const Deputados = (props) => {
  const [Deputados, setDeputados] = useState([]);

  useEffect(() => {
   

    apiGov.get('/deputados').then(resultado => {
      setDeputados(resultado.data.dados)
  })
  }, [props]);

  console.log(Deputados)

return (
  <>
      
      <Container>
        <h1>Deputados</h1>
        <br />
        <Row>
          {Deputados.map((deputado) => (
            <Col key={deputado.id} md={3} className="md-3">
              
              <Card.Body>
                <p>
                {deputado.nome}
                </p>
                <Card.Img
                  variant="top"
                  src={deputado.urlFoto} 
                />

                
                <hr />
                  <p>
                  {deputado.siglaUf} | 
                  </p>
                  <p>
                    {deputado.siglaPartido}
                  </p>
                  
              </Card.Body>

              <Link to={"/deputados/" + deputado.id}>
                  <Button className="btn btn-success"> Detalhes</Button>       
              </Link>
              <hr />
            </Col>
          ))}
        </Row>
      </Container>
    </>
)};

export default Deputados