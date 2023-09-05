import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navigate from './Navigate/Navigate';
import UserList from './components/UserList/UserList';

function App() {

  return (
    <>
      <div>
         <BrowserRouter>
           <Routes>
             <Route index element={<Navigate/>}/>
             <Route path='/home' element={<Navigate/>} />
             <Route path='/userlist' element={<UserList/>} />
             
           </Routes>
         </BrowserRouter>
      </div>
    </>
  )
}

export default App
