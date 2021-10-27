import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import apiGov from "../services/apiGov";

const Partidos = () => {
  const [Partidos, setPartidos] = useState([]);

  useEffect(() => {
    apiGov.get("/blocos?ordem=ASC&ordenarPor=nome").then((resultado) => {
      setPartidos(resultado.data.results);
    });
  }, []);

  console.log(Partidos)



return (
    <>
      <Container>
        <h1>Partidos</h1>
        <br />
        <Row>
        
          {/*{partidos.map((partidos) => (
            <Col key={partidos.id} md={3} className="md-3">
              <Card.Body>
              
        
                </Card.Body>
            </Col>   
         ))} */}
        </Row>
        </Container>
        1
    </>

)

}









export default Partidos