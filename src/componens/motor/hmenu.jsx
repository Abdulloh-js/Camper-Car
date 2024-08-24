import React from 'react'

import yulduzcha from "../../assets/star.png"
import { campcar } from '../mock/motor';
import { CardWrapper, ComName, Company, Container, Name, Narx, Order } from './style';
import { Link } from 'react-router-dom';

const Hmenu = () => {
    console.log(campcar)
    const data=campcar.maindata;
console.log(data);

  return (
    <Container >
      {
        data.map((value, index)=>{
return(
<div key={index}>
    <Link className="Link" to={`/motor/${value.id}`}>
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
      } </Container>
  )
}

export default Hmenu