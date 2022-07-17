import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react"


import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from '@mui/material/Divider';
import { Outlet, Link,Navigate } from "react-router-dom";

// import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import { positions } from '@mui/system';
import Searchbarpageload from './searchbarpageload';
import Home from "./Home"

function Header(prop) {


  const [searchtext, setsearchtext] = useState("")
  const[clicked,setclicked] = useState(false)

  function searchbarvalue(e) {
    setsearchtext(e.target.value)
  }
  function click(){
    setclicked(true)
  }



  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Link to="/" > <Navbar.Brand style={{ fontSize: "40px" }} href="#">Snkr<bold style={{ fontWeight: "60px" }}>HEAD</bold></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav fixed="top"
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/newarrival" className="itemclass" >New Arrival</Link>

              <Link to="/collection" className=" itemclass dropbtn-footwear"  >
                Collection
              </Link>
              <div className="dropdown-content-footwear">
                <Link  to="/collection/sneakers"className="dropdownclass">Sneakers</Link>
                <Link  to="/collection/apparel"className="dropdownclass" >Apparel </Link>
                
              </div>


              <Link to="/brands" className=" itemclass dropbtn"  >
                Brands
              </Link>
              <div className="dropdown-content">
                <Link className="dropdownclass" to="brands/nike">Nike</Link>
                <Link className="dropdownclass" to="brands/addidas">Addidas </Link>
                <Link className="dropdownclass" to="#">Reebok</Link>
                <Link className="dropdownclass" to="#">Fila</Link>
                <Link className="dropdownclass" to="#">Puma</Link>
              </div>

            </Nav>




            {clicked ? <input className="header-input" onChange={searchbarvalue} type="text" placeholder='Eg: Nike air max' /> : null }

            {/* {searchtext ? <Navigate to= {"search/"+searchtext} />: <Navigate to= "/" />} */}
            <SearchIcon onClick = {click} style={{ color: "white", cursor: "pointer", position: "relative", left: "15px", top: "2px" }} />

           <Link to="/user"> <PersonOutlineIcon style={{ color: "white", marginLeft: "47px",cursor: "pointer" }} /> </Link>
            
            < AddShoppingCartIcon style={{ color: "white", margin: "0 20px 0 40px",cursor: "pointer" }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Header;