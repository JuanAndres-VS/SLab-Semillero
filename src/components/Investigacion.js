import React from 'react'
import DataTableInvestigacion from './DataTableInvestigacion'

function Investigacion() {
     
    const data = [
      { grupoDeInvestigacion: "Reactivos I", director: "Laboratorio", cantidadDeIntegrantes: "Edificio F", numeroDeroyectos: 320},
      { grupoDeInvestigacion: "Reactivos II", director: "Laboratorio", cantidadDeIntegrantes: "Edificio G", numeroDeroyectos: 320},
      { grupoDeInvestigacion: "Reactivos I", director: "Laboratorio", cantidadDeIntegrantes: "Edificio F", numeroDeroyectos: 320},
      { grupoDeInvestigacion: "Reactivos II", director: "Laboratorio", cantidadDeIntegrantes: "Edificio G", numeroDeroyectos: 320},
      { grupoDeInvestigacion: "Reactivos I", director: "Laboratorio", cantidadDeIntegrantes: "Edificio F", numeroDeroyectos: 320},
      { grupoDeInvestigacion: "Reactivos II", director: "Laboratorio", cantidadDeIntegrantes: "Edificio G", numeroDeroyectos: 320},
     ];
  
    return (
      DataTableInvestigacion('Investigaciónes',data)
    )
  }
  export default Investigacion