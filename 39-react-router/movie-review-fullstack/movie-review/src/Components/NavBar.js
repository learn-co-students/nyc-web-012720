import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function NavBar(props) {
  return (
    <div className="nav-bar">
       <Link to="/movies"><img alt="flatiron tomatoes" src="tomatoes.png"/></Link>
        <div>
          <input placeholder="Search..."/>
          <Button color="default"><div>Submit</div></Button>
        </div>
        <Link to="/login"><Button color="default"><div>Login</div></Button></Link>
        {/* <a href="/signup"><Button color="default" ><div>Sign Up</div></Button></a> */}
        <Link to="/signup"><Button color="default" ><div>Sign Up</div></Button></Link>
        <Button color="default">
          <div><span aria-label="person" role="img">👤</span></div>
        </Button>

    </div>
  );
}

export default NavBar;