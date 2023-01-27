import React from 'react'
import styled from 'styled-components'
import MUIDataTable from "mui-datatables";
import LaunchIcon from '@mui/icons-material/Launch';

function DataTableInvestigacion(title = String, data = Array) {

  const columns = [
    {
     name: "grupoDeInvestigacion",
     label: "Grupo de Investigación",
     options: {
      filter: true,
      sort: false,
      setCellProps: () => ({
        align: "center"
      }),
      setCellHeaderProps: (value) => ({
        style: { backgroundColor: "#003687", color: "white" },
        className: "centeredHeaderCell"
      })
     }
    },
    {
     name: "director",
     label: "Director",
     options: {
      filter: false,
      sort: true,
      setCellProps: () => ({
        align: "center"
      }),
      setCellHeaderProps: (value) => ({
        style: { backgroundColor: "#003687", color: "white" },
        className: "centeredHeaderCell"
      })
     }
    },
    {
     name: "cantidadDeIntegrantes",
     label: "Cantidad de Integrantes",
     options: {
      filter: false,
      sort: false,
      setCellProps: () => ({
        align: "center"
      }),
      setCellHeaderProps: (value) => ({
        style: { backgroundColor: "#003687", color: "white" },
        className: "centeredHeaderCell"
      })
     }
    },
    {
     name: "numeroDeroyectos",
     label: "Número de Proyetos",
     options: {
      filter: false,
      sort: false,
      setCellProps: () => ({
        align: "center"
      }),
      setCellHeaderProps: (value) => ({
        style: { backgroundColor: "#003687", color: "white" },
        className: "centeredHeaderCell"
      })
     }
    },
     {
      name: "abrir",
      label: "Abrir",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (dataIndex, rowIndex) => (
          <div>
            <LaunchIcon
              onClick={()=>{window.location.pathname = "/algo"}}
            />
          </div>
        ),
        setCellProps: () => ({
          align: "center"
        }),
        setCellHeaderProps: (value) => ({
          style: { backgroundColor: "#003687", color: "white" },
          className: "centeredHeaderCell"
        })
       },
     }
   ];
   const options = {
     filterType: 'dropdown',
     selectableRows: 'none',
     resizableColumns: true,
     responsive: 'standard',
   };

  return (
    <Container>
      <h1>{title}</h1>
      <Table>
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </Table>
    </Container>

  )
}
export default DataTableInvestigacion

const Container = styled.div`
  font-size: 1.25rem;
  color: black;
  padding: 0vh 3.34vw 0vh 3.34vw;
`
const Table = styled.div`
  border-color: black;
  padding: 2vh 2vw 2vh 2vw;
`