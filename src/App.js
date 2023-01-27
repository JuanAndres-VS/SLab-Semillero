import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Header from './components/Header';
import Facultades from './components/Facultades'
import Laboratorios from './components/Laboratorios'
import { FacultadesData } from './components//FacultadesData';
import FacultadesLaboratorios from './components/FacultadesLaboratorios';
import Investigacion from './components/Investigacion';
import Inventario from './components/Inventario';
import Herramientas from './components/Herramientas';

function App() {
  return (
    <div className="App">
      <General>
        <Sidebar/>
        <Content>
          <Header/>
          <Routes>
            <Route path="/Home" element={<Facultades/>}/>
            <Route path="/Inventario" element={<Inventario/>}/>
            <Route path="/Facultades" element={<Facultades/>}/>
            <Route path="/Laboratorios" element={<Laboratorios/>}/>
            <Route path="/Investigacion" element={<Investigacion/>}/>
            <Route path="/Herramientas" element={<Herramientas/>}/>
            {FacultadesData.map((val, key)=>{
                            return(
                                <Route key={key} path = {"/Facultades/"+val.link+"/Laboratorios"} element={<FacultadesLaboratorios/>}/>
                            )
                        })}
          </Routes>
        </Content>
      </General>
    </div>

  );
}

export default App;

const General = styled.div`
  display: flex;
`
const Content = styled.div`
  width: 85.8vw;
  height: 100vh;
  overflow-x: hidden;
`
