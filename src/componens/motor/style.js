import styled from "styled-components";
import Oboy from '../../assets/motors.png';


export const CardWrapper=styled.div`

display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 223px;
height: 307px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
padding: 20px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

`
export const Container=styled.div`

display: grid;
grid-template-areas: "a a a a";
gap: 20px;


@media only screen and (max-width: 1370px){
    display: grid;
    grid-template-areas: "a a a";
}
@media only screen and (max-width: 1200px){
    display: grid;
    grid-template-areas: "a a";
}
@media only screen and (max-width: 570px){
    display: grid;
    grid-template-areas: " a";
}


`
export const Order=styled.div`
.order-btn{
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 15px;
}
.order-btn button{
    color: #006DAB;
    width: 94px;
height: 35px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
/* btn sh */
background-color: white;
cursor: pointer;
}
/* .order-btn button:hover{
    background-color:  #006DAB ;
    text-decoration-color: white;
} */

`
export const Name=styled.div`
   color: var(--text, #373737);
padding-top: 7px;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Company=styled.div`
display: flex;
align-items: center;
/* gap: 60px; */
justify-content: space-between;
padding-top: 10px
`
export const ComName =styled.div`

color: var(--text, #373737);

font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

`
export const Narx =styled.div`

color: var(--blue, #006DAB);
padding-top: 20px;
font-size: 22px;
font-style: normal;
font-weight: 900;
line-height: normal;
`


export const Menu=styled.div`
width: 100%

`




export const Container2=styled.div`
display: grid;
grid-template-areas: "a";
gap: 20px;
`

export const CardWrapper2=styled.div`


display: flex;
  
    align-items: center;
    justify-content: center;
    width: 955px;
height: 180px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
padding: 30px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

@media only screen and (max-width: 1350px){
    width: 700px;
justify-content: space-between;
}
@media only screen and (max-width: 1100px){
    width: 600px;
}
@media only screen and (max-width: 600px){
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
}

`

export const Order2=styled.div`
.order-btn{
    display: flex;
    align-items: center;
    gap: 20px;
    padding-top: 15px;
}
.order-btn button{
    color: #006DAB;
    width: 291px;
height: 35px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
/* btn sh */
background-color: white;
cursor: pointer;
}

@media only screen and (max-width: 1350px){
    width: 100px;
    .order-btn{
        display: flex;
        flex-direction: column;
        margin-right: -150px;
        margin-top: -40px;
    }

    
}
@media only screen and (max-width: 1100px){
    .order-btn button{
        width: 250px;
        height: 30px;
    }
}

`






export const NameWrapper=styled.div`

display:flex;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 1350px){
    gap: 100px;
}
@media only screen and (max-width: 600px){
    margin-top: -100px;
}

`
export const BtnWrapper=styled.div`
display: flex;
flex-direction: column;
gap: 30px;

`


export const DetailOboy=styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
   justify-content: center;
    height: 350px;
   gap: 20px;
   background-image: url(${Oboy});
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    background-repeat: no-repeat;
    color: white;
    

`
export const OboyCom=styled.div`
color: #FFF;
text-align: center;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const ButtonDiv=styled.div`
display: flex;
gap: 20px;
padding-top: 20px;
`
export const AddBtn=styled.button`
width: 181.5px;
height: 50.014px;
flex-shrink: 0;
border-radius: 10px;
background: var(--blue, #006DAB);
border: none;
cursor: pointer;
.Add{
    color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const CompareBtn=styled.button`
background-color: transparent;
border: 2px solid #FFF;
width: 181.5px;
height: 50.014px;
flex-shrink: 0;
border-radius: 10px;
cursor: pointer;
.Add{
    color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const DetaTop=styled.div`
flex: 1;

`
export const DetaImg=styled.img`
@media only screen and (max-width: 700px){
    width: 400px;
}
`

export const DetaRight=styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 10px;

`
export const InfoName=styled.div`
color: #000;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const InfoCost=styled.div`
color: #006DAB;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const TogriChiziq=styled.div`
width: 560px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
@media only screen and (max-width: 700px){
    width: 400px;
}
`
export const Gap=styled.div`
@media only screen and (max-width: 700px){
    justify-content: space-evenly;
}
`

export const SmallInfo=styled.td`
color: var(--text, #373737);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const SmallInfoRight=styled.td`
color: rgba(55, 55, 55, 0.80);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const Comfort=styled.h2`
color: var(--text, #373737);
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-bottom: 20px;
`
export const Word=styled.div`
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
@media only screen and (max-width: 700px){
    width: 400px;
}
`
export const DetaRight1=styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;

`

export const CompareBtn1=styled.button`
background-color: white;
border: 2px solid var(--blue, #006DAB);
width: 181.5px;
height: 50.014px;
flex-shrink: 0;
border-radius: 10px;
cursor: pointer;
.Add{
    color: var(--blue, #006DAB);
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}



`
export const DetaMobile=styled.div`
@media only screen and (max-width: 1350px){
    display: flex;
    flex-direction: column;
    
}
`
