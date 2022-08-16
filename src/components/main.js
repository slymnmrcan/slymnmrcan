import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { Col, Container, Row, Button, Table } from 'react-bootstrap';
import "../style/style.css";
import veriler from '../data/db.json'
import {
    BrowserRouter,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Add from './add';

const Main = () => {
    let gelir =0;
    let gider = 0;
    let bank = 0;
    veriler.forEach(element => {
        if (element.direction === 0) {
            gelir = element.price + gelir;
        }
        else {
            gider = element.price + gider
        }
        bank = gelir-gider;
    });


    return (
        <div>
            {process.env.NODE_ENV}
            <br></br>
            {process.env.REACT_APP_API_URL}

            <Container fluid className='mt-5' >
                <Row className='border'>
                    <Col xs={2}> <h1><Link className='linknone' to="/" > Repo</Link> </h1>
                        {bank}$</Col>
                    <Col xs={5}><Button><h1><Link className='linknone' to="/Add"> <FaPlus /></Link></h1></Button> </Col>
                    <Col xs={5}> <h1>Self Finance App</h1> </Col>
                </Row>
                <Container>

                    <Row>
                        <Table className='mt-5' striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Başlık</th>
                                    <th>Fiyat</th>
                                    <th>Yön</th>
                                    <th>Açıklama</th>
                                    <th>Tarih</th>
                                    <th>işlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    veriler.map((veriler, index) => {
                                        return <tr key={index}>
                                            <td>{veriler.id}</td>
                                            <td>{veriler.head}</td>
                                            <td>{veriler.price}</td>
                                            <td>{veriler.direction==0 ? "gelir" : "gider"}</td>
                                            <td>{veriler.description}</td>
                                            <td>{veriler.date}</td>
                                            <td><Button variant='danger'>Sil</Button> <Button variant='warning'><Link className='linknone' to='Update'> Güncelle</Link></Button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Main
