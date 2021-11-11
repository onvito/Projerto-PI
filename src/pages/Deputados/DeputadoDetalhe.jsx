import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import apiGov from "../../services/apiGov";
import { Link } from "react-router-dom";

const DeputadoDetalhe = (props) => {
  
  const [dados, setDados] = useState({});
  const [status, setStatus] = useState({})

  useEffect(() => {
    const id = props.match.params.id;

   
    apiGov.get(`/deputados/${id}`).then((resultado) => {
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
                    src={dados.urlFoto}
                  />
                  
                </Card>
              </Col>
              <Col md={9}>
                <h2>{dados.nomeCivil}</h2><br />
                <p>CPF: {dados.cpf}</p>
                <p>Data de Nascimento: {dados.dataNascimento}</p>
                <p>Escolaridade: {dados.escolaridade}</p>
                <p>Local de Nascimento: {dados.municipioNascimento}</p>
                
         
                
              </Col>
              <hr />
              <hr />
            </Row>
            <Link to={"/deputados"}> 
                <Button className="btn btn-success"> Voltar</Button>  
            </Link>
            <hr />           
          </Container>
          
        </>
       
      
    </>
  );
};

export default DeputadoDetalhe;
