import {Routes , Route} from 'react-router-dom'
import Workspace from './pages/user/Workspace'
import Auth from './pages/access/Auth'
import GithubCallBack from './components/oauth-components/GithubCallback'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/signin' element={<Auth isSignin={true}/>}/>
        <Route path='/workspace' element={<Workspace/>}/>
        <Route path='/github/callback' element={<GithubCallBack/>}/>
      </Routes>
    </>
  )
}

export default App
