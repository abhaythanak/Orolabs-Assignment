import {Link} from 'react-router-dom'

export default function NavBar() {
    return(
        <div className="NavBar">
            <div className="Link">
              <Link to="/home" style={{textDecoration:"none",color:"black"}}><h1>Home</h1></Link>
              <Link to="/userlist" style={{textDecoration:"none",color:"black"}}><h1>UserList</h1></Link>
              <Link to="/anagram" style={{textDecoration:"none",color:"black"}}><h1>Anagram Checker</h1></Link>
            </div>
        </div>
    )
}
