import React, {useState} from 'react'
import styled from 'styled-components'
import { InventarioData } from './InventarioData';


function Inventario() {
  return (
    <Container>
    <h1>Laboratorio X</h1>
    <Content>
        {InventarioData.map((val)=>{
                        return(
                            <Wrap onClick={()=>{window.location.pathname = "/Herramientas"}}>
                                <ObjImg src= {val.image}/>
                                <Information>
                                    <IT>
                                        <b>{val.title}</b>  
                                    </IT>
                                    <IQ>
                                        Cantidad: {val.quantity}
                                    </IQ>
                                </Information>
                                <Description>
                                    {val.description}
                                </Description>
                            </Wrap>                            
                        )
                    })}
    </Content>
</Container>

  )
}

export default Inventario

const ObjImg = styled.img`
    height: 20vh;
    width: 17.6vw;
    border-radius: 2vh;
    margin: 1.5vh,1.5vw,1.5vh,1.5vw;
`

const IT = styled.div`
    margin-right: 4.5vw;
    margin-left: 1vw;
`
const IQ = styled.div`
    font-size: 1rem;
    margin-top: 0.4vh;
`
const Description = styled.div`
    font-size: 1rem;
    color: black;
    margin-top:1.5vh;
    margin-right: 1.5vw ;
    margin-left: 1.5vw ;
`
const Information = styled.div`
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
`
const Container = styled.div`
    font-size: 1.25rem;
    color: black;
    padding: 0vh 3.34vw 0vh 3.34vw;
    /*@media (max-width: 1200px){
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
    }*/
`

const Content = styled.div`
    display: grid;
    margin-top: 5.6vh;
    grid-row-gap: 5vh;
    grid-column-gap: 4vw;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 100%;

   /* @media (max-width: 1200px){
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
    }*/
`
const Wrap = styled.div`
    height: 40vh;
    width: 37vh;
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