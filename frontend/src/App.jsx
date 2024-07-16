import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage'
function App() {

  return (
   <>
   <Router>
    <Routes> 
          <Route path='/' element={<Homepage/>}></Route>
    </Routes>
   </Router>
   </>
  )
}

export default App