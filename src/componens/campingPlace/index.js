import React from 'react'


import youtube from "../../assets/youtube.png"
import naver from "../../assets/naver.png"
import insta from "../../assets/insta.png"
import { Umumiy } from '../Styles/style'
import { Camping, CampingMenu, Location } from './style'
import { CampingPlaces } from '../mock/camping'
import { Link } from 'react-router-dom'





const CampingPlaceComponent = () => {

  console.log(CampingPlaces)
  const data1=CampingPlaces.maindata;
console.log(data1);
  return (
    <Umumiy>
      
      <div className="motors5">
       <h4 className='Home'>Home / Camping Place</h4>
      
       <h1 className='Page'>Camping Place</h1>
</div>


<CampingMenu>

{
        data1.map((value, index)=>{
return(
<div key={index}>
    <Link className="Link" to={`/camping-place/${value.id}`}>
   
   <Camping> <div><img style={{width: "395px", height: "300px"}} src={value.car.photo} /></div>
     <div>{value.car.name}</div>
                  <div>{value.car.location}</div>  
        
        </Camping>  

             
   

       </Link>
</div>

)

        })
      }

</CampingMenu>







    </Umumiy>
  )
}

export default CampingPlaceComponent