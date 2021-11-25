import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { removeFromFavAction } from "../actions";

const mapStateToProps = state => ({
  favs: state.favs.content
})

const mapDispatchToProps = dispatch => ({
  removeFromFav: (indexToRemove) => {
    dispatch(removeFromFavAction(indexToRemove))
  }
})

const Faviorite = ({ favs, removeFromFav }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {favs.map((company) => (
          <li key={company._id} className="my-4">
            <Button variant="danger" onClick={() => removeFromFav(company)}>
              <FaTrash />
            </Button>
            <span className="mx-2"><strong>{company.company_name}</strong></span>
          </li>
        ))}
      </ul>
    </Col>
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(Faviorite);