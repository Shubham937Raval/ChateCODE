import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ChatContainer } from './Pages/ChatContainer'
import { Registration } from './Pages/Registration'
import { Login } from './Pages/Login'
import { MainPage } from './Pages/MainPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>
          <Route exact path='/register' element={<Registration/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/chat' element={<ChatContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
