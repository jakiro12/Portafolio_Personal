import Init from './components/LandingPage'
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import Deploys from './components/DeployActives'

function App() {
//.color1 {color: #122a46;}
//.color2 {color: #15518e;}
//.color3 {color: #50bc34;}
//.color4 {color: #bde552;}
//.color5 {color: #f2e981;}
  return (
    <Router>    
    <Routes>
      <Route path="/" element={<Init/>} />
      <Route path="/projects" element={<Deploys/>} />
        </Routes>
    </Router>
  )
}

export default App
