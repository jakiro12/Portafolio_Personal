import Init from './components/LandingPage'
import {HashRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <Router>    
    <Routes>
      <Route path="/" element={<Init/>} />
        </Routes>
    </Router>
  )
}

export default App
