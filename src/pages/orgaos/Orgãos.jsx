
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Box from "../../components/Box";

import apiGov from "../../services/apiGov";

const Orgãos     = (props) => {
  const [Orgãos , setOrgãos  ] = useState([]);

  useEffect(() => {
   

    apiGov.get('/orgaos').then(resultado => {
      setOrgãos (resultado.data.dados)
  })
  }, [props]);

  console.log(Orgãos    )

return (
  <>
      
        <Container>
        <h1>Orgãos  </h1>
        <br />
        <Row>
          {Orgãos.map((orgaos) => (
            <Col key={orgaos.id} md={3} className="md-3">
              <div className="col text-center">
              <Card.Body>
              <Box title={orgaos.nome}>
         
                <hr />
                  <p>
                 Conhecido como: {orgaos.apelido}  
                  </p> <hr />
                  <p>
                    Tipo Orgão: {orgaos.tipoOrgao}
                  </p> <hr />
                  <p>
                    Nome da Publicação: {orgaos.nomePublicacao}
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

export default Orgãos   