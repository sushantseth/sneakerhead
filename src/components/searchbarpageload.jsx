import 'bootstrap/dist/css/bootstrap.css';
import React,{useState, useEffect, useParams} from "react"
import NewArrivals from "./arrivals";
import { Container, Row, Col } from "react-bootstrap"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {  shoesize, apparelsize } from './data';


function Searchbarpageload (props) {
    const theme = createTheme({
        palette: {
            neutral: {
                main: '#323A45',    
                contrastText: '#fff',
            },
        },
    });

    const params = useParams();
    const [newitem,setnewitemdata] = useState([])

    useEffect(()=>{
        fetch({"http://localhost:8080/" :params.id}).then((response) => response.json()).then((data)=> setnewitemdata((prev)=> [...data]))
        
    })
//https://stackoverflow.com/questions/40844297/what-is-difference-between-axios-and-fetch
    return (
        <div >

            <div className='newarrival-filter'>
                <p style={{ position: "relative", top: "30px", left: "30px", textAlign: "left", color: "grey" }}>SEARCH AND FILTER</p>

                <form action="">
                    <p className="form" >Filter by Gender</p>
                   
                    <input type="radio" id="men" name='gender' />
                    <label for="men">Men</label><br />
                    <input type="radio" id="women" name='gender' />
                    <label for="women">Women</label><br />
                    

                    <p className="form">Filter by Shoe Size (UK)</p>
                    {shoesize.map((eachsize) => {
                        return <div> <input type="radio" id={eachsize} name='size' />
                            <label for={eachsize}>{eachsize}</label><br /> </div>
                    })}


                    <p className="form">Filter by Apparel Size</p>
                    {apparelsize.map((eachsize) => {
                        return <div> <input type="radio" id={eachsize} name='asize' />
                            <label for={eachsize}>{eachsize}</label><br /> </div>
                    })}
                </form>
                <ThemeProvider theme={theme}>
                    <Button style={{ marginTop: "30px" }} className="form" color="neutral" variant="contained">
                        Apply Filters
                    </Button>
                </ThemeProvider>


            </div>

            <h1 style={{fontSize: "20rem"}}>{props.params.id}</h1>

{/* 
            <div className='newarrival-itemlist'>
               
                <Container>

                    <Row>
                        {newitem.map((data) =>  <Col lg={4} className="arrival-page-col" > <NewArrivals src={data.url} cost={data.cost} /></Col> )}


                    </Row>
                </Container>
            </div> */}
        </div>
    )  
};

export default Searchbarpageload;