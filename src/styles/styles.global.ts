import styled from 'styled-components'

export const Container = styled.div`
    background-color: #0F0F0F;
    text-align: center;
`

export const ViewContent = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const Title = styled.span`
    color: #FFF;
    font-family: "Medium";
    font-size: 45px;
    padding-bottom: 10px;
    line-height: 20px;
`

export const SubTitle = styled.span`
    color: #F2F2F2;
    font-family: "Light";
    font-size: 30px;
    line-height: 20px;
`

export const Separator = styled.div`
    margin: 20px 0px;
`

export const RowContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const City = styled.span`
    color: #F2F2F2;
    font-family: "Light";
    font-size: 25px;
    line-height: 30px;
    text-decoration: none;
`
