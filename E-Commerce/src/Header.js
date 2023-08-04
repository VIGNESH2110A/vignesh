import './Header.css';
import Card from './Card'
import { Link } from 'react-router-dom';

let Header=()=>
 {
  return (
  
    <div className="header">
        <div className="left_head">
        <Link to="/" style={{textDecoration: 'none'}}> <h1 class="head">TV ShowRoom</h1></Link>
        </div>
        <div className="right_head" >
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Category</p>
          <Link to="/login" style={{textDecoration: 'none'}}><p>Login</p></Link>
        </div>
        <div>
            <Card></Card>
        </div>
      </div>
   
  );
}
export default Header;