import { Container, Row, Col, Form,Tab,Nav,Button } from "react-bootstrap"
import { Cities } from "./Cities"
import { cityArr } from "../DB";
import { useState} from "react";
import { cityArrGraph, options, events } from "../DB";
import Graph from "react-graph-vis";
import {choosePoisk} from "../functions/poisk";
import {graphjs,nodes} from "../functions/poisk";
import 'react-tree-graph/dist/style.css'
export const Banner = () => {
    let start ='Рига'
    let finish='Уфа'  
    const [selected,setSelected]=useState('1');
    const [viewRes,setViewRes]=useState('false')
    function view(){
        choosePoisk(selected,graphjs,start,finish);
        setViewRes(!viewRes);
        
    }
    const handleChange = (e) => {
        setSelected(e.target.value);
      };
    return (
        <section className="banner">
            <Container>
                <Row>
                    <span className="tagline">Welcome to my lab</span>
                    <Graph
                        graph={cityArrGraph}
                        options={options}
                        events={events} />
                    <Col xs={12} md={6} xl={7}>
                        <Row>
                            <Col xs={12} md={12} xl={12}>
                                <h3>Выберите вид поиска</h3>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills"  className="nav-pills mb-5 justify-content-center aling-items-center" id="pills-tab">
                                <Nav.Item>
        <Nav.Link eventKey="first">
            Неинформатированный
         </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="second">Информатированный</Nav.Link>
        </Nav.Item>
        </Nav>
        <Tab.Content>
        <Tab.Pane eventKey="first"> <Form.Select aria-label="Default select example"  value={selected} onChange={handleChange}>
                <option value="1">В глубину</option>
                <option value="2">В ширину</option>
                <option value="3">С ограничением грубины</option>
                <option value="4">С интерактивным углублением</option>
                <option value="5">Двунаправленный поиск</option>
            </Form.Select>
            <Button variant="primary" onClick={view}>Start</Button>
            {viewRes &&<h3>Cложность метода - {nodes.length}</h3> && nodes.map(name=><h3 key={name}>---{name}---</h3>)}
            </Tab.Pane>
        <Tab.Pane eventKey="second"> <Form.Select  aria-label="Default select example" >
                <option value="1">Жадный</option>
                <option value="2">Минимизация</option>
            </Form.Select>

            </Tab.Pane>
        </Tab.Content>
        </Tab.Container>
                            </Col>          
                        </Row>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Cities cities={cityArr} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}