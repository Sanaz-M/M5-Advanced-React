import { useState, useEffect } from "react";
import { Row, Col, Form, ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getJobsAction } from "../actions";



const mapStateToProps = (state) => ({
    jobsResult: state.jobs.result,
    jobsLoading: state.jobs.isLoading,
    jobsSearch: state.jobs.query
})

const mapDispatchToProps = (dispatch) => ({
    getJobs: () => {
        dispatch(getJobsAction())
    }
})


const HomePage = ({getJobs, jobsSearch, jobsResult}) => {
    const [query, setQuery] = useState('')



    useEffect(() => {
        getJobs();
    }, [query]);

    const searchChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <Row id='row1'>
                <Col id='col1'>
                    <Form onSubmit={getJobs}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                value={jobsSearch}
                                onChange={searchChange}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup as="ul">
                        {
                            jobsResult.length > 0 && jobsResult.map((job) => (

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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)