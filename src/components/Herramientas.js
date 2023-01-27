import { Description } from '@mui/icons-material';
import React, {useState} from 'react'
import styled from 'styled-components'
import { InventarioData } from './InventarioData';
import DataTableHerramientas from './DataTableHerramientas';

function Herramientas() {
    const data = [
        { reference: "5xv45-244", laboratory: "CAPSAB", quantity: "1", project: "Automatizacion de hongos"},
        { reference: "5xv45-244", laboratory: "CAPSAB", quantity: "1", project: "Automatizacion de hongos"},
        { reference: "5xv45-244", laboratory: "CAPSAB", quantity: "1", project: "Automatizacion de hongos"},
        { reference: "5xv45-244", laboratory: "CAPSAB", quantity: "1", project: "Automatizacion de hongos"},
       ];
  return (

    DataTableHerramientas(data)
  )
}

export default Herramientas

const Container = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
`
const Title = styled.div`
    font-size: 1.25rem;
    color: black;
    margin-top: 0vh;
    margin-bottom: 5vh;
    margin-left: 1.5vw;
`
const Information= styled.div`
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
`
const SubTitle = styled.div`
    font-size: 1.25rem;
    color: black;
    font-weight: bold;
    margin-top: 0vh;
    margin-bottom: 1.5vh;
`
const D = styled.div`
    font-size: 1rem;
    color: black;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
`
const ObjImg = styled.img`
    height: 30vh;
    width: 20vw;
    margin-left: 1.5vw;
`