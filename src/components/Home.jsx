import React from "react"

import Carouselcomponent from "./carousel";
import NewArrival from "./arrivals";
import GenderBox from "./genderbox";
import Stores from "./stores";
import Footer from "./footer";
function Home() {
  return (
    <div>
 
 <Carouselcomponent />
 <div className= "arrival-class">
   <NewArrival src ="https://media.gq-magazine.co.uk/photos/621cbb5c9c02050e132ba6dd/master/w_2580%2Cc_limit/24022022_A_12.jpeg" cost="12,000"/>
   <NewArrival src= "https://media.gq-magazine.co.uk/photos/621cbc0f73021b051fcbc729/master/w_2580%2Cc_limit/24022022_A_13.jpeg"cost="22,000"/>
   <NewArrival src="https://media.gq-magazine.co.uk/photos/621cba005fd591a44bb4c960/master/w_2580%2Cc_limit/24022022_A_07.jpeg"  cost="18,000"/>
   <NewArrival src="https://media.gq-magazine.co.uk/photos/621cba0079d681bd2cc22f59/master/w_2580%2Cc_limit/24022022_A_06.jpeg"  cost="19,000"/>
 </div>
 <div className= "arrival-class">
   <GenderBox src="https://www.thefashionisto.com/wp-content/uploads/2020/11/HM-Men-2020-Winter-Neutrals-003.jpg" gender = "MEN" />
   <GenderBox src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/everlane-cotton-linen-blazer-1555357950.jpg?crop=1xw:1xh;center,top&resize=480:*" gender = "WOMEN" />
   <GenderBox src="https://i0.wp.com/www.menstylefashion.com/wp-content/uploads/2014/09/vladimir-ivanov-model-for-Calvin-Klein.jpg?ssl=1" gender = "APPAREL" />
</div>
<div className= "arrival-class">
   <Stores src="https://planomagazine.com/wp-content/uploads/2021/04/Plano-Magazine-Prized-Kicks-sneaker-store-now-open_feature-1170x556.jpg" location = "DELHI" />
   <Stores src="https://i0.wp.com/sneakerhistory.com/wp-content/uploads/2016/01/huf-san-francisco-store.jpg?resize=620%2C400" location = "MUMBAI" />
   <Stores src="https://cdn.trendhunterstatic.com/phpthumbnails/295/295571/295571_1_800.jpeg" location = "BENGALURU" />
   <Stores src="https://i.pinimg.com/originals/d4/05/83/d40583fa17cc5d86f90d1b0ec8b96ae6.jpg" location = "KOLKATA" />
</div>
<hr style={{color:"black"}}/>

<p className="leftaboveFooter"><strong> India-Wide Shipping </strong><br /> Average time 4-6 days</p>
<p className="rightaboveFooter"><strong>100% Secure Checkout</strong> <br />
UPI / Debit Card / Credit Card/ Net Banking</p>
<Footer />

</div>
  )
}

export default Home;
