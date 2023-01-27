import React from 'react'
import '../App.css';
import styled from 'styled-components'
import { SidebarData } from './SidebarData';

function Sidebar() {
    return (
        <SideBar>
            <All>
                <Logo src="/images/SALB-LOGO.svg" />
                <SidebarList>
                    {SidebarData.map((val, key)=>{
                            return(
                                <Row key={key} onClick={()=>{window.location.pathname = val.link}}>
                                    {" "}
                                    <Icon>
                                        {val.icon}
                                    </Icon>
                                    {" "}
                                    <Title>
                                        {val.title}
                                    </Title>
                                </Row>
                            )
                        })}
                </SidebarList>
                <UniLogo src="https://www.unisabana.edu.co/typo3conf/ext/speciality/Resources/Public/Assets/assets/img/logo-es-mobile.png" />
            </All>
        </SideBar>
    )
}

export default Sidebar

const All = styled.div`
    position: fixed;
    background-color: #003687 ;
    height: 100%;
    border-right: black;
`

const SideBar = styled.div`
    width: 30vh;
    overflow-x: hidden;
`
const SidebarList = styled.ul`
    padding: 0;
    width: 30vh;
`
const  Row = styled.li`
    width: 30vh;
    height: 10vh;
    list-style-type: none;
    margin:0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        background-color: #003D99;
        text-decoration-line: underline;
    }
`
const Icon = styled.div`
    flex: 2vh;
    margin-left: 3vh;
    font-size: 2.011rem;
`
const Title = styled.div`
    flex: 17vh;
    font-size: 1.341rem;
`
const Logo = styled.img`
    width: 25vh;
    margin-left: 2.5vh;
`
const UniLogo = styled.img`
    width: 25vh;
    margin: 10vh 0 0 2vh;
`