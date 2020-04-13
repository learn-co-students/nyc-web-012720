import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav} from '../helpers/styles'

const Navbar = props => {
    return (
        <StyledNav>
            <Link to="/"><h3>IntegrateMed</h3></Link>
            <Link to="/submissions">Submission</Link>
            <Link to="/maladies">maladies</Link>
            <Link to="/remedies">remedies</Link>
            <Link to="/profile">profile</Link>
        </StyledNav>
    )
}

export default Navbar;