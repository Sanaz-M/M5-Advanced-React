import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { addToFavAction } from '../actions'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

//...without HOOK...
// const mapStateToProps = (state) => state

// const mapDispatchToProps = (dispatch) => ({
//     addToFav: function (addCompany) {
//         dispatch(addToFavAction(addCompany))
//     }
// })


const CompanyInfo = () => {

    //...with HOOK...
    const dispatch = useDispatch()

    // const [selectedCompany, setSelectedCompany] = useState('')
    const [jobs, setJobs] = useState([])
    const params = useParams();

    useEffect(() => {
        jobInfo()
    }, [])


    const jobInfo = async () => {
        let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${params.companyName}&limit=10`)
        const { data } = await response.json()
        console.log(data)
        setJobs(data)
    }

    return (
        <Container>
            <Row>
                <Col>
                    {jobs.map((info) => (
                        <Card key={info._id}>
                            <Card.Body>
                                <span><strong>{info.company_name}</strong></span>
                                <div>{info.title}</div>
                                <Button variant="outline-danger" className="ml-3" onClick={() =>  dispatch(addToFavAction(info))}>Add to Favs</Button>
                            </Card.Body>
                        </Card>
                    ))}





                </Col>
            </Row>
        </Container >
    )
}

export default CompanyInfo