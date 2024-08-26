import {Routes , Route} from 'react-router-dom'
import Workspace from './pages/user/Workspace'
import Auth from './pages/access/Auth'
import GithubCallBack from './components/oauth-components/GithubCallback'
import Home from './pages/user/Home'
import CreateWspace from './pages/user/CreateWSpace'
import Profile from './pages/user/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/signin' element={<Auth isSignin={true}/>}/>
        <Route path='/workspace' element={<Workspace/>}/>
        <Route path='/github/callback' element={<GithubCallBack/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/workspace/add' element={<CreateWspace/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
