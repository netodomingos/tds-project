import styled from "styled-components";

interface InternContainerProps {
    borderLeft?: boolean
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
`

export const InternContainer = styled.div<InternContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 5px 6px;
    /* ${props => props.borderLeft === true && 'border-left: 0.4px solid #FFF;'}; */
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
