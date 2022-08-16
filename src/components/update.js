import React ,{useState,useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import veriler from '../data/db.json'
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

const Update = (AccountId) => {
  const [form, setForm] = useState([]);
  const [id, setId] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
    setForm({...form , [e.target.name]:e.target.value})
  }
  
  return (
    <div className='container m-5'>
      <Link to={"/"} className="btn btn-primary"> Anasayfa
      </Link>
      <h1 className='text-center'>Cari Girişi</h1>
      <Form className=''>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>id</Form.Label>
          <Form.Control type="number" value={id} name="id" placeholder="id" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Başlık</Form.Label>
          <Form.Control type="email" name="email" placeholder="Başlık" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fiyat</Form.Label>
          <Form.Control type="number" placeholder="fiyat" />
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
          Güncelle
        </Button>
      </Form>
    </div>

  )
}
export default Update