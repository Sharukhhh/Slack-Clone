import {Routes , Route} from 'react-router-dom'
import Workspace from './pages/user/Workspace'
import Auth from './pages/access/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/signin' element={<Auth isSignin={true}/>}/>
        <Route path='/workspace' element={<Workspace/>}/>
      </Routes>
    </>
  )
}

export default App
