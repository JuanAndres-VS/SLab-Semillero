import React from 'react'
import DataTableLab from './DataTableLab'
import { LaboratoriosData } from './LaboratoriosData'

function Laboratorios() {
  var data
  data = LaboratoriosData
  return (
    DataTableLab('Laboratorios',data)
  )
}
export default Laboratorios
