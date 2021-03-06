import React from "react";
import styled from "styled-components";
import LogoIcon from '../Util/Imagem/logo.svg'
const Main = styled.div`
    display: flex;
    justify-content: center;
    height: 89vh;
    background: linear-gradient(110deg, #3CB371 50%, #98FB98 50%);

    @media screen and (max-device-width : 480px){
        background-size: cover;
        height: 83vh;
    }
    
    
`

const DivMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;

    h1{
        font-size: 6vw;
        padding: 1vw;
        text-decoration: underline;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 95%;
        h1{
            font-size: 12vw;
        }
    }
    @media screen and (max-device-width : 800px){
        width: 100%;
        h1{
            font-size: 12vw;
        }
 
    }
`

const InteriorMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0,0,0,0.3);
    border: 1px black solid;
    width: 45vw;
    height: 58vh;

    h2{
        font-size: 2vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 100%;

        h2{
            font-size: 6vw;
            text-align: center;
        }
    }



    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 80%;
        h2{
            font-size: 6vw;
            text-align: center;
        }
 
    }
`
const DivTitulo=styled.div`
    display: flex;
    img{
        width: 5vw;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 95%;
        img{
            width: 10vw;
        }
    }  
    @media screen and (max-device-width : 800px){
        h1{
            font-size: 10vw;
            text-align: center;
        }
        img{
            width: 8vw;
        }
    }
`

const Buttons = styled.div`
    display: flex;
    width: 90%;
    height: 3vw;
    
    button{
        margin: 0 auto;
        background-color: hsl(0deg 0% 0%);
        color: white;
        border: none;
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        overflow: hidden;
        


        &:after {
            content: "";
            z-index: -1;
            background-color: hsla(0, 0%, 100%, 0.2);
            position: absolute;
            top: -50%;
            bottom: -50%;
            width: 2.0em;
            transform: translate3d(-525%, 0, 0) rotate(35deg);
        }

        &:hover:after {
            transition: transform 0.60s ease-in-out;
            transform: translate3d(200%, 0, 0) rotate(35deg);
        }

    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 40.5vw;
        flex-direction: column;
        justify-content: space-around;

        button{
            width: 100%;
            font-size: 5vw;
        }
    }


    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {

        button{
            width: 40%;
            height: 8vw;
            padding: 2%;
        }
    }

`

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Main>
                    {/* <Imagem /> */}
                    <DivMain>
                        <InteriorMain>
                            <DivTitulo>
                            <img src={LogoIcon}/>
                            <h1>Salva????o</h1>
                            </DivTitulo>
                            <h3>Precisando de uma ajudinha,temos sua salva????o.</h3>
                            <Buttons>
                                <button onClick={() => this.props.invocarTela("queroSerUmNinja")}>Quero ser um Salvador</button>
                                <button onClick={() => this.props.invocarTela("contratarUmNinja")}>Preciso de um salvador</button>
                            </Buttons>
                        </InteriorMain>

                    </DivMain>

                </Main>
            </div>
        )
    }
}