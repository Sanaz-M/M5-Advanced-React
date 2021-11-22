import { useState, useEffect } from "react";
import { Row, Col, Form, Container, ListGroup } from 'react-bootstrap'

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [jobOffers, setJobOffers] = useState([])


    useEffect(() => {
        fetchJobs();
    }, [])


    const fetchJobs = async () => {
        try {
            let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`,
                {
                    headers: {
                        "Content-type": 'application/json',
                    }
                });
            if (response.ok) {
                let jobs = await response.json();
                console.log(jobs)
                setJobOffers(jobs.data)
            } else {
                console.log("error fetching details");
            };

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Row id='row1'>
                <Col id='col1'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup as="ul">
                        {
                            jobOffers.length > 0 && jobOffers.map((job) => (

                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{job.category}</div>
                                        <div>{job.company_name}</div>
                                        <div>publication date: <span className="date1">{job.publication_date}</span></div>

                                    </div><hr />
                                </ListGroup.Item>
                                
                            ))
                        }

                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage