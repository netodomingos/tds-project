import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
`

export const InternContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`

export const Title = styled.span`
    color: #FFF;
    font-family: 'Light';
    font-size: 20px;
`

export const SubTitle = styled.span`
    color: #FFF;
    font-family: 'Medium';
    font-size: 18px;
`
