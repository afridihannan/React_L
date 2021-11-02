import React from 'react'
import styled from 'styled-components'

export default function Homepage({Loginuser,setLoginuser}) {
  
    return (
        <>
            <Box>
            <Hello>Hello,</Hello>
            <Logout onClick={()=>setLoginuser({})}>Log out</Logout>
            </Box>
            

        </>
    )
}

const Box=styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height:450px;
  width:50vw;
  margin:00 auto;
  margin-top:70px;
  border-radius:20px;
  box-shadow:0 0 10px 5px;
  background:white;
  position:relative;
`
const Logout=styled.button`
  color:black;
  font-size:25px;
  font-weight:600;
  height:35px;
  width:120px;
  background-color:blue;
`
const Hello=styled.h1`
 margin-bottom:3px;
 color:blue;
`
