import React from 'react'
import {  CheckWrap, CkeckBox, Create, Email, EmailWrapper, Input, Keep, Keep1, Or, OR, Reg, Royxat, SignIn, SignInWrap, SignWrapper, } from './style'
import naver from"../../assets/R.png"
import google from"../../assets/gooogle.png"
import talk from"../../assets/kakao.png"
import { Link, useLocation } from 'react-router-dom'
import Naavbar from '../naavbar'
import Footer from '../footer'


const ProfileComponents = () => {
const location = useLocation();
  const hideSidebar = location.pathname === "/profile"

  return (





    <div style={{display: `flex`, alignItems: `center`, justifyContent: `center`,}}>

<SignWrapper>
  <div>
    <Royxat>Sign In</Royxat>

      <EmailWrapper>
     <Email>Email</Email>
     <Input placeholder='Your Email' type='text'  />
         
      </EmailWrapper>

      <EmailWrapper>
     <Email>Password</Email>
     <Input placeholder='Your Password' type='password'  />
         
      </EmailWrapper>

      <CheckWrap>
          <div style={{display: `flex`, alignItems: `center`, gap: `5px`}}> <CkeckBox type='checkbox'    />  <Keep1>Keep me logged in</Keep1>  </div>
           <Keep>Forget your password ?</Keep>
      </CheckWrap>

      <SignInWrap><SignIn>Sign in</SignIn></SignInWrap>

      </div>

    <div style={{display: `flex`, flexDirection: `column`, alignItems:`center`, justifyContent: `center`, gap: `20px`}}> 
        <OR> <Or></Or>   <Keep>OR</Keep>   <Or></Or>          </OR>
        <div style={{gap: `20px`}}><img style={{width: `46px`, height: `46px`}} src={naver} alt='naver' /> <img style={{width: `46px`, height: `46px`}} src={google} alt='google' /> <img style={{width: `46px`, height: `46px`}} src={talk} alt='kakao' />    </div>
   <Link className='Link' to={`/create`}> <Create><Reg>Create Account</Reg></Create>  </Link>

    </div> 
      
</SignWrapper>
         
    </div>
  )
}

export default ProfileComponents