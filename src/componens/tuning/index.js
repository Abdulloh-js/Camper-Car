import React, { useState } from 'react';
import yulduzcha from "../../assets/star.png"
import rasm1   from "../../assets/icon-park.png"
import rasm2   from "../../assets/grommet.png"
import rasm3   from "../../assets/cart.png"
// import rasm4   from "../assets/Ellipse.png"
import rasm5   from "../../assets/user.png"
import rasm6   from "../../assets/clarity.png"
import rasm7   from "../../assets/ic_round-view-list.png"
import small1  from "../../assets/small1.png"
import small2  from "../../assets/small2.png"
import small3  from "../../assets/small2.png"
import image1  from "../../assets/image1.png"
import star    from "../../assets/star.png"
import image2  from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import youtube from "../../assets/youtube.png"
import naver from "../../assets/naver.png"
import insta from "../../assets/insta.png"
import { Umumiy } from '../../componens/Styles/style';
import { Link } from 'react-router-dom';
import { campcar } from '../mock/tuning';
import { CardWrapper, ComName, Company, Container, Name, Narx, Order } from '../motor/style';
import HmenuTuning from './hmenu';
import VmenuTuning from './vmenu';



const TuningComponent = () => {
     console.log(campcar)
      const data=campcar.maindata;
  console.log(data);

  const [active, setActive]=useState(true);

  function handleClick(){
        setActive(true);
  }
  
  function handleMenu(){
        setActive(false);
  }
  return (
    <Umumiy>
    

<div className="motors3">
<h4 className='Home'>Home / Tuning</h4>
       <h2 className='Ranges'>Our ranges</h2>
       <h1 className='Page'>Tuning</h1>
</div>


<div className="header">
        <div style={{marginBottom: '-10px'}} className="top-face"><p>Cost of car</p></div>
          <div className="item">
                  <div className="raqam">
                           <p>Item </p>
                           <h1>25.156</h1>
                  </div>
                  <div className="right-header">
                           <div className="Sort"> <div> <p>Sort by</p> </div>
                            <div className="birlash"> <div className="select"><p>Select</p></div>
                             <div className="mayda"><img src={rasm2}alt ="" /></div> </div>
                             <div className="birlash"> <div className="raqam1"><p>60</p></div>
                             <div className="mayda"><img src={rasm2} alt="" /></div> </div>
                        </div>

                    <div className="Clarity">   
                    <button onClick={handleClick} className="brommet"><img src={rasm6} alt="" /></button>
                    <button onClick={handleMenu} className="brommet2"><img src={rasm7} alt="" /></button>
                </div>
                  </div>
          </div>
</div>

<div class="header2">
        <div class="Sort2"> <div> <p>Sort by</p> </div>
        <div class="birlash"> <div class="select2"><p>Select</p></div>
         <div class="mayda"><img src={rasm2} alt="" /></div> </div>
         <div class="birlash"> <div class="raqam1"><p>60</p></div>
         <div class="mayda"><img src={rasm2} alt="" /></div> </div>
    </div>

</div>


<div className="katta">

<div className="main-face">
           <div className="left-main">
                 <div className="from">
                         <div className="to">
                                 <p>from</p>
                                 <input type="text" name="" id="" />
                         </div>
                         <div className="to">
                                <p>to</p>
                                 <input type="text" name="" id="" />
                         </div>
                 </div>
                 <div className="company">
                          <div className="name-com">
                                 <p>Brand</p>
                                 <img src={rasm2} alt="" />
                          </div>
                          <div className="com-items">
                                   <div className="check">
                                         <input type="checkbox" name="a" id="" /> 
                                         <p>Aidal</p>
                                   </div>
                          </div>
                          <div className="com-items">
                                <div className="check">
                                      <input type="checkbox" name="a" id="" /> 
                                      <p>Knal</p>
                                </div>
                       </div>
                       <div className="com-items">
                        <div className="check">
                              <input type="checkbox" name="a" id="" /> 
                              <p>escape</p>
                        </div>
               </div>
                 </div>
                
               <div className="company">
                <div className="name-com">
                       <p>Company</p>
                       <img src={rasm2} alt="" />
                </div>
                <div className="com-items">
                         <div className="check">
                               <input type="checkbox" name="" id="" /> 
                               <p>escape</p>
                         </div>
                </div>
                <div className="com-items">
                      <div className="check">
                            <input type="checkbox" name="" id="" /> 
                            <p>Aidal</p>
                      </div>
             </div>
             
       </div>
       <div className="company">
        <div className="name-com">
               <p>License type</p>
               <img src={rasm2} alt="" />
        </div>
        <div className="com-items">
                 <div className="check">
                       <input type="checkbox" name="" id="" /> 
                       <p>1 year</p>
                 </div>
        </div>
        <div className="com-items">
              <div className="check">
                    <input type="checkbox" name="" id="" /> 
                    <p>2 year</p>
              </div>
     </div>
     <div className="com-items">
      <div className="check">
            <input type="checkbox" name="" id="" /> 
            <p>1.5year</p>
      </div>
</div>
</div>
<div className="company">
        <div className="name-com">
               <p>Number of travelers</p>
               <img src={rasm2} alt="" />
        </div>
        <div className="com-items">
                 <div className="check">
                       <input type="checkbox" name="" id="" /> 
                       <p>2</p>
                 </div>
        </div>
        <div className="com-items">
              <div className="check">
                    <input type="checkbox" name="" id="" /> 
                    <p>3-4</p>
              </div>
     </div>
     <div className="com-items">
      <div className="check">
            <input type="checkbox" name="" id="" /> 
            <p>5+</p>
      </div>
</div>
</div>
<div className="company">
        <div className="name-com">
               <p>Location</p>
               <img src={rasm2} alt="" />
        </div>
        <div className="com-items">
                 <div className="check">
                       <input type="checkbox" name="" id="" /> 
                       <p>Seoul</p>
                 </div>
        </div>
        <div className="com-items">
              <div className="check">
                    <input type="checkbox" name="" id="" /> 
                    <p>Korea
                    </p>
              </div>
     </div>
     <div className="com-items">
      <div className="check">
            <input type="checkbox" name="" id="" /> 
            <p>Pusan</p>
      </div>
</div>
</div>

<div className="button">
          <button><p>Cancel</p></button>
          <button className="button2"><p>Search</p></button>
</div>


   <div className="compare">
           <p>Compare</p>
           <div className="small-pic">
                  <div className="small"><img src={small1} alt="" /></div>
                  <div className="small"><img src={small2} alt="" /></div>
                  <div className="small"><img src={small3} alt="" /></div>
           </div>
   </div>


           </div>

           <div >

            {active ? <HmenuTuning /> : <VmenuTuning />}
      {/* <Container>
      {
        data.map((value, index)=>{
return(
<div key={index}>
    <Link className="Link" to={`/tuning/${value.id}`}>
      <CardWrapper> 
      <div><img style={{width: "150px", height: "100px"}} src={value.car.photo} /></div>
        <Name>{value.car.name}</Name>
      <Company> <ComName>{value.car.company}</ComName>
               <div>{value.car.rate}<img src={yulduzcha} alt="yulduz" /></div>  </Company>

               <Narx>{value.car.cost}</Narx>
        <Order>
                             <div className="order-btn">
                                   <button><p>Order</p></button>
                                   <button><p>Compare</p></button>
                             </div>
       </Order>
       </CardWrapper>
       </Link>
</div>

)

        })
      } </Container> */}
    </div>


           {/* <div className="right-main">
                <div className="car-item">
                      <div className="items-car">
                             <img src={image1} alt="" />
                             <h3>Name of the car</h3>
             <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                             <b>250 $</b>
                             <div className="order-btn">
                                   <button><p>Order</p></button>
                                   <button><p>Compare</p></button>
                             </div>
                             <div className="order-btn2">
                              <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                              <button><p>View Details</p></button>
                        </div>
                      </div> 
                </div>
                <div className="car-item">
                  <div className="items-car">
                         <img src={image2} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image3} alt="" width="202px" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star}alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div class="car-item">
                  <div className="items-car">
                         <img src={image4} alt="" width={'205px'} />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                  <img src={image3} alt="" width="202px" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                  <img src={image4} alt="" width={'205px'} />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                  <img src={image2} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div class="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>
            <div className="car-item">
                  <div className="items-car">
                         <img src={image1} alt="" />
                         <h3>Name of the car</h3>
         <div className="brand">  <p>Brand name</p><div className="yulduz"><img src={star} alt="" /><h5>5.3</h5> </div>       </div> 
                         <b>250 $</b>
                         <div className="order-btn">
                               <button><p>Order</p></button>
                               <button><p>Compare</p></button>
                         </div>
                         <div className="order-btn2">
                          <button className="Muhim-btn"><p style={{color: 'white'}}>Order</p></button>
                          <button><p>View Details</p></button>
                    </div>
                  </div> 
            </div>




           </div> */}
</div>

</div>








</Umumiy>
  )
}

export default TuningComponent