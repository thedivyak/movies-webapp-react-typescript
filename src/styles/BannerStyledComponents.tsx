import styled from "styled-components"
import {mainColor} from "./mainTheme"

export const Banner = styled.div`
    background-color: ${mainColor};
    display: block;
    color: white;
    height: 4rem;
    
    @media screen and (max-height: 1200px) {
        height: 3rem;
    }
`

export const FooterContainer = styled(Banner)`
    padding: .5rem;
    height: 1rem;
    text-align: right;
    
    @media screen and (max-height: 1200px) {
        height: 1rem;
    }
`

export const Logo = styled.div`
    padding: 1rem 0 0 2rem;   
    display: inline-block; 
    
    @media screen and (max-height: 1200px) {
        padding: .5rem 0 0 1rem;
    }
`

export const FooterButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
`

