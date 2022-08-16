import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { Col, Container, Row, Button, Table } from 'react-bootstrap';
import "../style/style.css";
import {
    BrowserRouter,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Add from './add';

const Main = () => {
    const [veri, setVeri] = useState("");
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     axios.get("http://localhost:3000/account")
    //         .then(res => setVeri(res));
    // }, [veri]);
    const veriler = [
        {
            id: 1,
            header: "başlık",
            price: "fiyat",
            yon: "gelir",
            description: "açıklama",
            date: "tarih",
        },
        {
            id: 2,
            header: "başlık",
            price: "fiyat",
            yon: "gider",
            description: "açıklama",
            date: "tarih",
        },
        {
            id: 3,
            header: "başlık",
            price: "fiyat",
            yon: "gider",
            description: "açıklama",
            date: "tarih",
        },
        {
            id: 4,
            header: "başlık",
            price: "fiyat",
            yon: "gelir",
            description: "açıklama",
            date: "tarih",
        }, {
            id: 5,
            header: "başlık",
            price: "fiyat",
            yon: "gelir",
            description: "açıklama",
            date: "tarih",
        }
    ]
    return (
        <div>

            <Container fluid className='mt-5' >
                <Row className='border'>
                    <Col xs={2}> <h1><Link className='linknone' to="/" > Repo</Link> </h1>
                        100$</Col>
                    <Col xs={5}><Button><h1><Link className='linknone' to="/Add"> <FaPlus /></Link></h1></Button> </Col>
                    <Col xs={5}> <h1>Self Finance App</h1> </Col>
                </Row>
                <Container>

                    <Row>
                        <Table className='mt-5' striped bordered hover>
                            <thead>
                                <th>id</th>
                                <th>Başlık</th>
                                <th>Fiyat</th>
                                <th>Yön</th>
                                <th>Açıklama</th>
                                <th>Tarih</th>
                                <th>işlemler</th>
                            </thead>
                            <tbody>
                                {
                                    veriler.map((veriler, index) => (
                                        <tr key={index}>
                                            <td>{veriler.id}</td>
                                            <td>{veriler.header}</td>
                                            <td>{veriler.price}</td>
                                            <td>{veriler.yon}</td>
                                            <td>{veriler.description}</td>
                                            <td>{veriler.date}</td>
                                            <td><Button variant='danger'>Sil</Button> <Button variant='warning'><Link className='linknone' to='Update'> Güncelle</Link></Button></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Main
