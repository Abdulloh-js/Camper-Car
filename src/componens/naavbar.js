
import { Umumiy } from './Styles/style'
import React from 'react';

import rasm1   from "../assets/icon-park.png"
import rasm2   from "../assets/grommet.png"
import rasm3   from "../assets/cart.png"
// import rasm4   from "../assets/Ellipse.png"
import rasm5   from "../assets/user.png"
import { Link } from 'react-router-dom';

const Naavbar = () => {
  return (
    <Umumiy>

<div className="navbar">
    <div className="left-nav"><div className="park">
     <img src={rasm1} alt="" />
    </div><h3>Camper</h3></div>
    <div className="menu-nav">
            <div className="grommet"><Link className="Link" to={"/motor"}><p>Motor</p></Link><img src={rasm2} alt="" /></div>
            <div className="grommet"><Link className="Link" to={"/caravan"}><p>Caravan</p></Link><img src={rasm2} alt="" /></div>
            <div className="grommet"><Link className="Link" to={"/tuning"}><p>Tuning</p></Link><img src={rasm2} alt="" /></div>
            <div className="grommet"><Link className="Link" to={"/used-car"}><p>Used Car</p></Link><img src={rasm2} alt="" /></div>
            <div className="grommet"><Link className="Link" to={"/camping-place"}><p>Camping Place</p></Link><img src={rasm2} alt="" /></div>
    </div>
    <div className="right-nav">
            <div className="cart">
                 <img src={rasm3} alt="" />
                  {/* <img src={rasm4} alt=""  />  */}
                  <div className="ellipse">1</div>
            </div>
            <div className="user">
                <Link to={"/profile"}>  <div style={{cursor: "pointer"}}>< img src={rasm5} alt="" /> </div> </Link>
                  <p>En</p>
                  <img style={{marginLeft: '-15px'}} src={rasm2} alt="" />
            </div>
            <div className="park2">
             <img src={rasm1} alt="" />
            </div>
    </div>

</div>
    </Umumiy>
  )
}

export default Naavbar