import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 15px 0px;
`

export const InterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`

export const Title = styled.span`
    color: #FFF;
    font-family: 'Medium';
    font-size: 20px;
    margin-bottom: 5px;
`

export const TemperatureText = styled.span`
    color: #FFF;
    font-family: 'Medium';
    font-size: 20px;
    margin-top: 5px;
`
