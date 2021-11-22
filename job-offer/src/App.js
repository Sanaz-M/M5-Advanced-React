import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import CompanyInfo from './components/CompanyInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Container, Row } from 'react-bootstrap';





const App = () => {
  return(
    <BrowserRouter>
    <Container>
      <Row>
      <NavBar />
      </Row>
      <Row>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyInfo />} />

      </Routes>
      </Row>
    </Container>
    </BrowserRouter>
  )
}

export default App;
