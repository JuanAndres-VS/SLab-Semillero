import React, {useState} from 'react'
import styled from 'styled-components'
import { FacultadesData } from './FacultadesData';
import DataTableLab from './DataTableLab'
import { FacultadesLaboratoriosData } from './FacultadesLaboratorioData';

function FacultadesLaboratorios() {
    var titulo;
    var data;
    data = FacultadesLaboratoriosData
    FacultadesData.map((val)=>{
        if(window.location.pathname == "/Facultades/"+val.link+"/Laboratorios"){
            titulo = val.title
        }
    })
    return(
        DataTableLab(titulo,data)
        //console.log(FacultadesLaboratoriosData)
    )
}

export default FacultadesLaboratorios