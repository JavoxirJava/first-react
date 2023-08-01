import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { ByIdObj, byIdV } from "../api/api";

function Cbu() {

    const [cbu, setCbu] = useState([]);
    const [cbuObj, setCbuObj] = useState("");
    const [modal, setModal] = useState(false);
    const [firstCountry, setFirstCountry] = useState("")
    const [lastCountry, setLastCountry] = useState("")
    const [result, setResult] = useState(0)

    const openModal = () => setModal(!modal);

    useEffect(() => {
        getCbu();
    }, []);

    function getCbu() {
        axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/").then(res => setCbu(res.data))
    }

    function selectCountry() {
        let c1 = cbu.filter(item => item.id === byIdV("first_country"))[0];
        let c2 = cbu.filter(item => item.id === byIdV("last_country"))[0];
        if (c1 !== undefined && c2 !== undefined) {
            setFirstCountry(c1.Rate)
            setLastCountry(c2.Rate);
            ByIdObj("row2").className = "d-flex";
            setCbuObj(c2);
            setResult((c1.Rate / c2.Rate * 1).toFixed(2) + ` (${c2.Ccy})`);
        }
    }

    function result2() {
        setResult((firstCountry / lastCountry * byIdV("first_input")).toFixed(2) + ` (${cbuObj.Ccy})`);
    }

    return (
        <Container className="mt-5">
            <Button color="primary" className="my-5" onClick={openModal}>Button</Button>
            <Row className="gy-4">
                {cbu.map((item, i) =>
                    <Col md="3" key={i}>
                        <Card color="light" style={{ width: '18rem', cursor: "pointer" }} onClick={() => {
                            setCbuObj(item);
                        }}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {item.CcyNm_UZ}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {item.Ccy}
                                </CardSubtitle>
                                <CardText>
                                    <p>Rate: {item.Rate}</p>
                                    <p>Diff: {item.Diff}</p>
                                    <p>Date: {item.Date}</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>

            <Modal isOpen={modal} size="lg">
                <ModalHeader toggle={openModal}>

                </ModalHeader>
                <ModalBody>
                    <Row className="mb-4">
                        <Col md="5">
                            <select className="form-select" id="first_country" onChange={selectCountry}>
                                <option selected disabled value="0">Select Country</option>
                                {cbu.map((item, i) => <option key={i} value={item.id}>{item.CcyNm_UZ}</option>)}
                            </select>
                        </Col>
                        <Col md="2" className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </Col>
                        <Col md="5">
                            <select className="form-select" id="last_country" onChange={selectCountry}>
                                <option selected disabled value="0">Select Country</option>
                                {cbu.map((item, i) =>
                                    <option key={i} value={item.id}>{item.CcyNm_UZ}</option>
                                )}
                            </select>
                        </Col>
                    </Row>

                    <Row className="d-none" id="row2">
                        <Col md="5">
                            <Input type="number" id="first_input" defaultValue="1" onChange={result2}/>
                        </Col>
                        <Col md="2" className="text-center">
                            AS
                        </Col>
                        <Col md="5">
                            <p className="fs-5">{result}</p>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openModal} className="w-100">Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default Cbu;