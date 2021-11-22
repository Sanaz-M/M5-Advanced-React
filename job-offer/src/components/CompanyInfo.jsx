import { useState, useParams, useEffect } from "react"
import {Container, Row, Col, Card} from 'react-bootstrap'

const CompanyInfo = () => {

    const [jobs, setJobs] = useState([])
    const params = useParams()

    useEffect(() => {
        jobInfo()
        console.log(params)
    }, [])


    const jobInfo = async() => {
        let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${params}`)
        const {data} = await response.json()
        setJobs(data)
    }

    return(
        <Container>
            <Row>
                <Col>
                    {jobs.map((info) => ( 
                        <Card key={info._id}>
                        <Card.Body>data={info.description}</Card.Body>
                      </Card>
                         ))}
                        
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyInfo