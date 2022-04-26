import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 11vh;
    height: 89vh;
    background: linear-gradient(110deg, #FFD700 50%, #F0E68C 50%);

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 100%;
        height: 82vh;
    }
`

const Cadastro = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 90%;
    padding-bottom: 0.5vw;
    background: linear-gradient(110deg, #3CB371 60%, #98FB98 60%);
    font-weight: bold;

    h2{
        font-size: 4vw;
    }

    li{
        list-style: none;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 100%;
        height: 82vh;
        margin-top: 11vh;

        h2{
            font-size: 6vh;
        }
    }

    
`
const Slogan = styled.div`
    text-align: center;
    width: 80%;
    font-size: 2vw;
    color: grey;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 3vh;
    }
`
class Sobrenos extends React.Component {

    render() {
        return (
            <Container>
                <Cadastro>
                    <h2>Sobre nós</h2>
                    <Slogan>
                        <p>O site Salvação é destinado exclusivamente para divulgação de prestadores de serviços, sendo vetado a venda de qualquer tipo de produto. Cadastros em desconformidade com as normas do site salvação não serão aprovados ou retirados de publicação. O usuário ao enviar o cadastro aceita integralmente todos os termos de uso do site.</p>
                    </Slogan>
                    

                </Cadastro>
            </Container>

        )
    }
}
export default Sobrenos