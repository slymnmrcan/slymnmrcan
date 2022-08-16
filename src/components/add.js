import React from 'react';
import { Form, Button } from 'react-bootstrap'
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

const Add = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='m-5'>
      <Link to={"/"} className="btn btn-primary"> Anasayfa
      </Link>
      <h1 className='text-center'>Cari Girişi</h1>
      <Form className=''>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Başlık</Form.Label>
          <Form.Control type="email" placeholder="Başlık" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fiyat</Form.Label>
          <Form.Control type="text" placeholder="fiyat" />
        </Form.Group>

        <Form.Group className="mb-3 col-2">
          <Form.Select aria-label="Default select example">
            <option>Cari tipi seçiniz</option>
            <option value="1">Gelir</option>
            <option value="2">Gider</option>

          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Açıklama</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3 col-2" >
          <Form.Label>Tarih</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={formSubmit}>
          Kaydet
        </Button>
      </Form>
    </div>

  )
}
export default Add