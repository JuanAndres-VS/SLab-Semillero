import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';


function Header() {
  return (
    <Container>
      <Box>
        <Icon icon="ic:baseline-notifications" color="#8d8d8d" width="2.39vw" height="5vh" />
      </Box>
      <UsuImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAE4zgpQRJDAGgJS_M8YP_v9528dmFKucFQ&usqp=CAU"/>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 15vh;
  width: 100vw;
  margin: 3vh 0 0 73vw;
`
const UsuImg = styled.img`
  cursor: pointer;
  border-radius: 15%;
  width:  4vw;
  height: 8.5vh;
  border: 0 solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 2.06vw 2.84vh -1.38vw, rgb(0 0 0 / 73%) 0 1.38vw 1.42vh -1.38vw;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 1);
  }
`
const Box = styled.div`
  width:  3.1vw;
  height: 6.5vh;
  margin: 2vh 2vw 0 0;
  border-radius: 15%;
  box-shadow: rgb(0 0 0 / 69%) 0 2.06vw 2.84vh -1.38vw, rgb(0 0 0 / 73%) 0 1.38vw 1.42vh -1.38vw;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 1);
  }
`