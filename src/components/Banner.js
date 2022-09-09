import { Container, Row, Col, Form } from "react-bootstrap"
import { Cities } from "./Cities"
import { cityArr } from "../DB"
import { cityArrGraph, options, events } from "../DB"
import Graph from "react-graph-vis";
export const Banner = (props) => {

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
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Неинформатированный</option>
                                    <option value="2">Информатированный</option>
                                </Form.Select>
                            </Col>
                            <Col xs={12} md={12} xl={12}>
                                <h3>Неинформатированный поиск</h3>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">В глубину</option>
                                    <option value="2">В ширину</option>
                                    <option value="3">С ограничением грубины</option>
                                    <option value="3">С интерактивным углублением</option>
                                    <option value="3">Двунаправленный поиск</option>
                                </Form.Select>
                            </Col>
                            <Col xs={12} md={12} xl={12}>
                                <h3>Информатированный поиск</h3>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Жадный поиск</option>
                                    <option value="2">Минимизации суммарной оценки</option>
                                </Form.Select>
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