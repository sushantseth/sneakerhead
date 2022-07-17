import { textAlign } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "./footer"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function User() {
  return (
    <div>
    <div className="flex-container">
        <h2 style={{fontWeight:"normal" ,position:"relative", left:"18.5rem", top:"2rem"}}>My Account</h2>
        <h4 style={{fontWeight:"normal" ,position:"relative", left:"8rem", top:"6.5rem"}}>Login</h4>
    <Form style={{height:"27rem"}}>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{position:"relative",top:"6.5rem",left:"3.8rem"}}>Email address</Form.Label>
        <Form.Control style={{position:"relative",top:"7rem",left:"4rem", width:"30rem"}} type="email"  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{position:"relative",top:"7rem",left:"3.8rem"}}>Password</Form.Label>
        <Form.Control style={{position:"relative",top:"7rem",left:"4rem", width:"30rem"}} type="password"  />
      </Form.Group>
    
      <Button variant='secondary' type="submit">
        Submit
      </Button>
      <p style={{fontSize:"13px", left:"14rem", top:"8rem"}}>Not Registered? Click <a style={{color:"blue"}}href="">Here</a></p>
      <p>Or Sign In using</p>
      <button className = "google-btn" ><GoogleIcon /></button>
      <button className = "fb-btn" ><FacebookIcon /></button>
      <button className = "twitter-btn" ><TwitterIcon /></button>
    </Form>
    </div>
    <Footer />
    </div>
  );
}

export default User;