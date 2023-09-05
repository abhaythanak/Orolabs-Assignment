import { Link } from "react-router-dom";
import './Error.css';
export default function NotFoundPage() {
    return <div className="notFound">
              <div className="">
                 <img src="https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small/404-error-page-not-found-3d-illustration-png.png" width={'400px'} height={'400px'} />
                 <p style={{textAlign:"center"}}>
                 <Link to="/home" style={{color:"black"}}><h1>Go to Home</h1></Link>
                 </p>
              </div>
            
          </div>;
}
