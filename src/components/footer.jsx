import React from "react"

function Footer(){
    return ( <div>
    <footer>
        
      
        
        <ul class="no-bullets">
        <p className="foot">IMPORTANT LINKS</p>
            <li><a href= "#" >Refunds/Cancellations </a></li>
            <li><a href= "#" > Terms and Conditions </a></li>
            <li><a href= "#" >FAQ </a></li>
            <li><a href= "#" >Privacy </a></li>
        </ul>
        
        
        <ul class="no-bullets">
             <p className="foot">NEED HELP?</p>
             <li><a href= "#" >My account </a></li>
            <li><a href= "#" > Size Chart </a></li>
            <li><a href= "#" >Contact Us </a></li>
        </ul>
       
        
        <ul class="no-bullets">
        <p className="foot">FOLLOW</p>
            <li><a href= "#" >Instagram</a></li>
            <li><a href= "#" > Twitter </a></li>
            <li><a href= "#" >Facebook </a></li>
            
        </ul>
        <p className="foot subscribe">SUBSCRIBE TO OUR NEWSLETTER</p>
         {/* <form action="#">
    <label htmlFor="mailid">Join our mailing list to receive the latest news.</label>
    <input type="text"  id = "mailid" placeholder="Email Address" />
  
    <input type="submit" value="Submit" />
        </form> */}
    </footer>
    

    </div>
    )
}
export default Footer;

