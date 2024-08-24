import React from 'react'
import { CheckWrap, CkeckBox, Email, EmailWrapper, Input, Keep, Keep1, RegPage, Royxat, SignIn, SignInWrap } from './style'
import { Link } from 'react-router-dom'
import hero from"../../assets/heroicons.png"

const RegistrationComponent = () => {
  return (
    <div  style={{display: `flex`, alignItems: `center`, justifyContent: `center`,}}>

<RegPage style={{display: `flex`, alignItems: `center`, justifyContent: `center`,}}>

<div>
   <div style={{display: `flex`, justifyContent: `space-between`}}> <Royxat>Registrate</Royxat> 
        <img style={{cursor: `pointer`}} src={hero} alt='heroicons'  />
        </div>

      <EmailWrapper>
     <Email>Email</Email>
     <Input placeholder='Your Email' type='text'  />
         
      </EmailWrapper>

      <EmailWrapper>
     <Email>Password</Email>
     <Input placeholder='Your Password' type='password'  />
         
      </EmailWrapper>

      <EmailWrapper>
     <Email>Repeat your password</Email>
     <Input placeholder='Your Password' type='password'  />
         
      </EmailWrapper>

      <CheckWrap>
          <div style={{display: `flex`, alignItems: `center`, gap: `5px`}}> <CkeckBox type='checkbox'    />  <Keep1>Keep me logged in</Keep1>  </div>
           
      </CheckWrap>

     <Link className='Link' to={`/motor`}> <SignInWrap><SignIn>Registrate</SignIn></SignInWrap>  </Link>

      </div>

</RegPage>

    </div>
  )
}

export default RegistrationComponent