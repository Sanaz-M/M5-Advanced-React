import { useState, useEffect } from "react"
import {Container, Row, Col, Card} from 'react-bootstrap'
import { useParams } from "react-router-dom"

const CompanyInfo = () => {

    const [jobs, setJobs] = useState([])
    const params = useParams();

    useEffect(() => {
        jobInfo()
    }, [])


    const jobInfo = async() => {
        let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${params.companyName}&limit=10`)
        const {data} = await response.json()
        setJobs(data)
    }

    return(
        <Container>
            <Row>
                <Col>
                    {jobs.map((info) => ( 
                        <Card key={info._id}>
                        <Card.Body>
                            <div>{info.company_name}</div>
                            {info.title}</Card.Body>
                      </Card>
                         ))}
                        
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyInfo