import React from 'react'
import { useParams } from 'react-router-dom'
import { campcar } from '../mock/tuning';
import { Umumiy } from '../../componens/Styles/style';
import { AddBtn, ButtonDiv, Comfort, CompareBtn, CompareBtn1, DetailOboy, DetaImg, DetaMobile, DetaRight, DetaRight1, DetaTop, InfoCost, InfoName, OboyCom, SmallInfo, SmallInfoRight, TogriChiziq, Word } from '../motor/style';

const TuningDetail = () => {
  const {id} =useParams();
  const data= campcar.maindata;

  const filteredData=data.filter((valeu) => valeu.id ===parseInt(id));
  console.log(filteredData)
  return (
    <div>
      {filteredData.map((valeu , index) => {
        return <div key={index}>

     <DetailOboy >
    <OboyCom>{valeu.car.company} </OboyCom>

     <ButtonDiv>
            <AddBtn><p className='Add'>Add to Cart</p></AddBtn>
            <CompareBtn><p className='Add'>Compare</p></CompareBtn>
     </ButtonDiv>
     </DetailOboy> 

<div style={{display: `flex`,flexDirection: `column`, alignItems:`center`, justifyContent: `center`, }}>

    <DetaMobile className='detaMobile' style={{display: `flex`, paddingTop: `50px`, gap: `150px`}}> <DetaTop>
          <DetaImg src={valeu.car.photo} width={`636px`}/>
         </DetaTop>   
         <DetaRight>
         <div style={{display: `flex`, gap: `300px`}}>     <InfoName>{valeu.car.company}</InfoName><InfoCost>{valeu.car.cost}</InfoCost>       </div> 
         <div>aid</div>
         <TogriChiziq></TogriChiziq>
         <table>
              <tr><SmallInfo>Company</SmallInfo> <SmallInfoRight>{valeu.car.company}</SmallInfoRight></tr>
              <tr><SmallInfo>People</SmallInfo> <SmallInfoRight>{valeu.car.people}</SmallInfoRight></tr>
              <tr><SmallInfo>License Type</SmallInfo> <SmallInfoRight>{valeu.car.license}</SmallInfoRight></tr>
         </table>
         </DetaRight>

        </DetaMobile>

        <DetaMobile className='detaMobile' style={{display: `flex`, gap: `150px`, paddingTop: `100px` }}>
        <DetaRight1>
            <div> <Comfort>Comfort</Comfort>
             <Word>{valeu.car.word1}</Word> </div>
         </DetaRight1>
         <DetaTop>  <DetaImg src={valeu.car.photo1} width={`683px`} height={`477px`}/></DetaTop>
         </DetaMobile>

         <DetaMobile className='detaMobile' style={{display: `flex`, gap: `150px` }}>

         <DetaTop>  <DetaImg src={valeu.car.photo2} width={`683px`} height={`477px`}/></DetaTop>
        <DetaRight1>
            <div> <Comfort>Tidying away is child’s play!</Comfort>
             <Word>{valeu.car.word2}</Word> </div>
         </DetaRight1>
         
         </DetaMobile>

         <DetaMobile className='detaMobile' style={{display: `flex`, gap: `150px` }}>
        <DetaRight1>
            <div> <Comfort>Ventilated , Lit up</Comfort>
             <Word>{valeu.car.word3}</Word> </div>
         </DetaRight1>
         <DetaTop>  <DetaImg src={valeu.car.photo3} width={`683px`} height={`477px`}/></DetaTop>
         </DetaMobile>

         <DetaMobile className='detaMobile' style={{display: `flex`, gap: `150px` }}>

         <DetaTop>  <DetaImg src={valeu.car.photo4} width={`683px`} height={`477px`}/></DetaTop>
        <DetaRight1>
            <div> <Comfort>Easy access</Comfort>
             <Word>{valeu.car.word4}</Word> </div>
         </DetaRight1>
         
         </DetaMobile>

         <DetaMobile className='detaMobile' style={{display: `flex`, gap: `150px`}}>
        <DetaRight1>
            <div> <Comfort>Heating</Comfort>
             <Word>{valeu.car.word1}</Word> 
             <ButtonDiv style={{paddingTop: `80px`}}>
            <AddBtn><p className='Add'>Add to Cart</p></AddBtn>
            <CompareBtn1><p className='Add'>Compare</p></CompareBtn1>
           </ButtonDiv>
             </div>
         </DetaRight1>
         <DetaTop>  <DetaImg src={valeu.car.photo5} width={`683px`} height={`477px`}/></DetaTop>
         </DetaMobile>
</div>
                

        </div>;
      })}
    </div>
  )
}

export default TuningDetail