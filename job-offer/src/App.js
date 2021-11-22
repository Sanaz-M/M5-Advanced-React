import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import {Container} from 'react-bootstrap'


const App = () => (
    <BrowserRouter>

    <Container>
      <Routes>
        <Route path="/" element={<HomePage query="developer"/>} />
      </Routes>
      
    </Container>
    </BrowserRouter>

)

export default App;
