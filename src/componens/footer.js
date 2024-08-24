import React from 'react'
import youtube from "../assets/youtube.png"
import naver from "../assets/naver.png"
import insta from "../assets/insta.png"
import { Umumiy } from './Styles/style'

const Footer = () => {
  return (
    <Umumiy>


<div className="top-foot"> <h3>Logo</h3>
      <div className="social">
                     <img src={youtube} alt="" width="30px" height="30px" />
                     <img src={naver} alt="" width="30px" height="24px" />
                     <img src={insta} alt="" width="30px" height="24px" />
            </div> </div>





            <div className="footer">
     <div className="top-foot">
       </div> 
            <div className="left-foot">
                  <h3>Camper</h3>
            </div>
            <div className="mid-foot">
                   <h3>Services</h3>
                   <div class="written">
                           <p>Camping </p>
                           <p>Lodging</p>
                           <p>Harbor</p>
                           <p>Day Use</p>
                   </div>
            </div>
            <div className="mid-foot">
                  <h3>Menu</h3>
                  <div className="written">
                          <p>About </p>
                          <p>Services</p>
                          <p>Booking</p>
                          <p>Blog</p>
            </div>
           
            </div>
            <div className="mid-foot">
      <h3>Contact</h3>
      <div className="written">
            <div class="social">
                     <img src={youtube} alt="" />
                     <img src={naver} alt="" />
                     <img src={insta} alt="" />
            </div>
              <p>021 Korea Seul, LA
            </p>
              <p>camper@example.com
            </p>
              <p>(021) 345-6789-99</p>
            
</div>

            </div>

















</div>

    </Umumiy>
  )
}

export default Footer