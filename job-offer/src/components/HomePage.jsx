import { useState, useEffect } from "react";
import { Row, Col, Form, ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { getJobsAction } from "../actions";
import {Spinner} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'


//...without HOOK...
// const mapStateToProps = (state) => ({
//     jobsResult: state.jobs.result,
//     jobsLoading: state.jobs.isLoading,
//     jobsSearch: state.jobs.query,
//     jobsError: state.jobs.isError,
// })

// const mapDispatchToProps = (dispatch) => ({
//     getJobs: (query) => {
//         dispatch(getJobsAction(query))
//     }
// })


const HomePage = () => {
    const [query, setQuery] = useState('')
    //...with HOOK...
    const jobsResult = useSelector(state => state.jobs.result)
    const jobsLoading = useSelector(state => state.jobs.isLoading)
    const jobsSearch = useSelector(state => state.jobs.query)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getJobsAction(query));
    }, [query]);

    const searchChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <Row id='row1'>
                
                    {jobsLoading ? (
                        <Spinner animation="border" variant="success" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%'
                        }} />
                    ) :
                        <Col id='col1'>
                            <Form onSubmit={(e)=>{
                                e.preventDefault()
                                dispatch(getJobsAction(query))
                            }}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        value={query}
                                        onChange={searchChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
}
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

export default HomePage