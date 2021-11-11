import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from "../../components/Box";

import apiGov from "../../services/apiGov";

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
              <div className="col text-center">
              <Card.Body>
              <Box title={deputado.nome}>
                
                <Card.Img
                  variant="top"
                  src={deputado.urlFoto} 
                />

                
                <hr />
                  <p>
                  UF: {deputado.siglaUf}  
                  </p>
                  <p>
                    Partido: {deputado.siglaPartido}
                  </p>

                  
                  <Link to={"/deputados/" + deputado.id}>
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

export default Deputados