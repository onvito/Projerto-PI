import React, { useEffect, useState } from "react";
import { Container,  Table } from "react-bootstrap";
import Box from "../../components/Box";
import apiGov from "../../services/apiGov";

const Eventos = (props) => {
  const [Eventos , setEventos  ] = useState([]);

  useEffect(() => {
   

    apiGov.get('/eventos').then(resultado => {
      setEventos (resultado.data.dados)
  })
  }, [props]);

  console.log(Eventos)

return (
  <>
        <hr />
        <Container>
        <Box title="Eventos">
                

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Data de Inicio</th>
                            <th>Data Fim</th>
                            <th>Situação</th>
                            <th>Tipo de Descrição</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Eventos.map((evento, i) => (
                            <tr key={i}>
                              
                                
                                <td>{evento.dataHoraInicio}</td>
                                <td>{evento.dataHoraFim}</td>
                                <td>{evento.situacao}</td>
                                <td>{evento.descricaoTipo}</td>
                                <td>{evento.descricao}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
            </Container>
    </>
)};

export default Eventos   