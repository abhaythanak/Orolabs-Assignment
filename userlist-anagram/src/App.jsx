import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navigate from './Navigate/Navigate';
import UserList from './components/UserList/UserList';
import NotFoundPage from './ErrorPage/NotFoundPage';
import Anagram from './Anagram/Anagram';
import NavBar from './components/NavBar/NavBar';
function App() {

  return (
    <>
      <div className='main'>
         <BrowserRouter>
         <NavBar/>
           <Routes>
             <Route index element={<Navigate/>}/>
             <Route path='/home' element={<Navigate/>} />
             <Route path='/userlist' element={<UserList/>} />
             <Route path='/anagram' element={<Anagram/>} />
             <Route path="*" element={<NotFoundPage/>} />
           </Routes>
         </BrowserRouter>
      </div>
    </>
  )
}

export default App
