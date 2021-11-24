import { useState, useEffect } from "react";
import { Row, Col, Form, Container, ListGroup, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [jobOffers, setJobOffers] = useState([])
    


    useEffect(() => {
        fetchJobs();
    }, []);

    const searchChange = (e) => {
        setQuery(e.target.value )
    }

    const fetchJobs = async (e) => {
        
        try {
            e.preventDefault()
            let response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search='+ query
                );
            if (response.ok) {
                const { data } = await response.json()
                setJobOffers(data)
              
            } else {
                console.log("error fetching details");
            };

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Row id='row1'>
                <Col id='col1'>
                    <Form onSubmit={fetchJobs}>
                        <Form.Control type="search" placeholder="search" value={query} onChange={searchChange}  />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup as="ul">
                        {
                            jobOffers.length > 0 && jobOffers.map((job) => (
                                 
                                <ListGroup.Item
                                    key={job._id}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{job.category}</div>
                                        <Link to={job.company_name}><div>{job.company_name}</div></Link>
                                        <div>publication date: <span className="date1">{job.publication_date}</span></div>
                                    </div><hr />
                                </ListGroup.Item>
                                

                            ))
                        }

                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage