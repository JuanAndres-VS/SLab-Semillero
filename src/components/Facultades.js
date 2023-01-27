import React, {useState} from 'react'
import styled from 'styled-components'
import { FacultadesData } from './FacultadesData';

function Facultades() {
  return (
    <Container>
        <h1>Facultades</h1>
        <Content>
            {FacultadesData.map((val, key)=>{
                            return(
                                <Wrap key={key} onClick={()=>{window.location.pathname = "/Facultades/"+val.link+"/Laboratorios"}}>
                                <h1>{val.title}</h1>
                                <Triangle/>
                                <Square style={{background : val.color}}/>
                                </Wrap>
                                
                            )
                        })}
        </Content>
    </Container>
  )
}

export default Facultades

const Container = styled.div`
    font-size: 1.25rem;
    color: black;
    padding: 0vh 3.34vw 0vh 3.34vw;
    @media (max-width: 1200px){
        padding: 0vh 5vw 0vh 5vw;
    }
    @media (max-width: 1050px){
        padding: 0vh 5vw 0vh 5vw;
    }
    @media (max-width: 880px){
        padding: 0vh 5vw 0vh 5vw;
    }
    @media (max-width: 720px){
        padding: 0vh 5vw 0vh 7vw;
    }
    @media (max-width: 600px){
        padding: 0vh 5vw 0vh 15vw;
    }
`

const Content = styled.div`
    display: grid;
    margin-top: 5.6vh;
    grid-row-gap: 5vh;
    grid-column-gap: 5.5vw;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    width: 100%;

    @media (max-width: 1200px){
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    @media (max-width: 1050px){
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media (max-width: 880px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (max-width: 720px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 600px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
const Wrap = styled.div`
    height: 25vh;
    width: 17vh;
    cursor: pointer;
    position: relative;
    border-radius: 2vh;
    border-color: black;
    border: 0.5vh solid rgba(249,249,249,0.1) ;
    box-shadow: rgb(0 0 0 / 69%) 0 1.7vw 4.2vh -0.66vw, rgb(0 0 0 / 73%) 0vh 1.07vw 1.4vh -0.66vw;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   
    h1{
        font-size: 1.012rem;
        margin: 1vh 0 0 0.5vh;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0 1.7vw 4.2vh -0.66vw, rgb(0 0 0 / 73%) 0vh 1.07vw 1.4vh -0.66vw;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-right: 14.8vh solid transparent;
    border-top: 14.2vh solid white;
    position: absolute;
    top: 11.35vh;
    left:2.6vh;
`
const Square = styled.div`
     width: 14.7vh; 
     height: 14vh; 
     border-radius: 0 0 2vh 0;
     position: absolute;
     top: 11.5vh;
     left:2.75vh;
     z-index: -1;
`