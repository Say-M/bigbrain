import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home'
import ChatGPT from './components/chat'
import DashLayout from './components/layout/DashLayout'
import MidJourney from './components/image'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<DashLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/brain-chat' element={<ChatGPT />} />
          <Route path='/brain-journey' element={<MidJourney />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
