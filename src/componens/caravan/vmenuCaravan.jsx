import React from 'react'

import yulduzcha from "../../assets/star.png"
import { BtnWrapper, CardWrapper2, ComName, Company, Container2, Name, NameWrapper, Narx, Order2 } from '../motor/style'
import { campcar } from '../mock/caravan';
import { Link } from 'react-router-dom';

const VmenuCaravan = () => {
    console.log(campcar)
    const data=campcar.maindata;
console.log(data);
  return (
    <Container2 >
      {
        data.map((value, index)=>{
return(
<div key={index}>
    <Link className="Link" to={`/caravan/${value.id}`}>
      <CardWrapper2> 
      <div className='rasmi'><img style={{width: "280px", height: "143px"}} src={value.car.photo} /></div>
   <BtnWrapper> <NameWrapper>  <div> <Name>{value.car.name}</Name>
       <ComName>{value.car.company}</ComName>  </div>
            <div>   <Narx>{value.car.cost}</Narx>
               <div>{value.car.rate}<img src={yulduzcha} alt="yulduz" /></div>  </div> </NameWrapper> 

              
        <Order2>
                             <div className="order-btn">
                                   <button><p>Order</p></button>
                                   <button><p>Compare</p></button>
                             </div>
       </Order2> </BtnWrapper>
       </CardWrapper2>
       </Link>
</div>

)

        })
      } </Container2>
  )
}

export default VmenuCaravan