import React from 'react';
import { Navbar , Nav , NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar=(props)=>{
    return (
    <div>
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to='/'>
                    YallaShopping
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Text >
            <Link to='/'>
                Home
            </Link>
        </Navbar.Text>

        <Navbar.Text>
            <Link to='/orders'>
                orders
            </Link>
        </Navbar.Text>
            <Navbar.Text pullRight>
                <Link to='/checkout'>
                <img src={require("../../public/images/cart31.png")} height="30" width="50"/>
                </Link>
            </Navbar.Text>
        </Navbar.Collapse>
        
    </Navbar>

    </div>
    
);
}
export default NavBar;