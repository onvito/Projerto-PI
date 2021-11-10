import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import apiGov from "../../services/apiGov";
import { Link } from "react-router-dom";

const PartidoDetalhe = (props) => {
  const [partidos, setPartidos] = useState([]);
  const [dados, setDados] = useState({});

  useEffect(() => {
    const id = props.match.params.id;

   apiGov.get('/partidos/:id').then(resultado => {
       setPartidos(resultado.data.dados)
    });
    apiGov.get(`/partidos/${id}`).then((resultado) => {
      setDados(resultado.data.dados);
   });
  }, [props]);

  console.log(dados);
  return (
    <>
      
       <>
          <Container>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={partidos.urlLogo}
                  />
                  
                </Card>
              </Col>
              <Col md={9}>
                <h2>{dados.nome}</h2><br />
                <p>Sigla: {dados.sigla}</p>
                
                
         
                
              </Col>
              <hr />
              <hr />
            </Row>
            <Link to={"/partidos"}> 
                <Button className="btn btn-success"> Voltar</Button>  
            </Link>
            <hr />           
          </Container>
          
        </>
       
      
    </>
  );
};

export default PartidoDetalhe;
