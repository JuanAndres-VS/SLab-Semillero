import React from 'react'
import styled from 'styled-components'
import MUIDataTable from "mui-datatables";
import LaunchIcon from '@mui/icons-material/Launch';
import { InventarioData } from './InventarioData';

function DataTableHerramientas(data = Array) {

  const columns = [
    {
     name: "reference",
     label: "Referencia",
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
     name: "laboratory",
     label: "Laboratorio",
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
     name: "quantity",
     label: "Cantidad",
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
     name: "project",
     label: "Proyeto",
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
        <Title>
            <h1>Arduino</h1>
        </Title>
        <Information>
            <ObjImg src="https://www.vistronica.com/10941-large_default/arduino-uno-r3-compatible.jpg"/>
            <D>
                <SubTitle>Description</SubTitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </D>
        </Information>
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
export default DataTableHerramientas

const Table = styled.div`
  border-color: black;
  padding: 2vh 2vw 2vh 2vw;
`
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