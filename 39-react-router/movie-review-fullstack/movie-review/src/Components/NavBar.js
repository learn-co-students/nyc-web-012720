import React from 'react';
import Button from '@material-ui/core/Button';

function NavBar(props) {
  return (
    <div className="nav-bar">
       <img alt="flatiron tomatoes" src="tomatoes.png"/>
        <div>
          <input placeholder="Search..."/>
          <Button color="default"><div>Submit</div></Button>
        </div>
        <Button color="default"><div>Login</div></Button>
        <Button color="default" ><div>Sign Up</div></Button>
        <Button color="default">
          <div><span aria-label="person" role="img">👤</span></div>
        </Button>

    </div>
  );
}

export default NavBar;