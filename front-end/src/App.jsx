import {Routes , Route} from 'react-router-dom'
import Auth from './pages/access/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App
