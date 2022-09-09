import { Container,Row,Col } from "react-bootstrap"
import {Cities} from "./Cities"
import {cityArr} from "../DB"
import {cityArrGraph,options,events} from "../DB"
import Graph from "react-graph-vis";
export const Banner = (props)=>{

    return(
        <section className="banner">
        <Container>
        <Row>
            <Col xs={12} md={6} xl={7}>
            <span className ="tagline">Welcome to my lab</span>
            <Graph
      graph={cityArrGraph}
      options={options}
      events={events}/>
            </Col>
            <Col xs={12} md={6} xl={5}>
             <Cities cities={cityArr}/>
            </Col>
        </Row>
        </Container>
        </section>
    )
}