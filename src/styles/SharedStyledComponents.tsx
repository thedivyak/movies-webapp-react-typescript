import styled from "styled-components"
import {Chip} from "@material-ui/core"
import {textColor} from "./mainTheme"

export const Page = styled.div`
    width:80%;
    margin: auto;
    padding: 1rem;
    
    @media only screen and (max-width: 500px) {
        width: 95%; 
        padding-top:.5rem;
    }

    @media screen and (max-height: 1200px) {
        padding:.5rem;
    }
`

export const PageTitle = styled.div`
    padding: 1rem 0;
    text-align: left;
    font-size: xx-large;
    color:black;
    
    @media screen and (max-height: 1200px) {
        width: 95%; 
        padding-top:.25rem;
    }
  
`

export const StyledChip = styled(Chip)`
    margin-right: 1rem;
    margin-bottom:.25rem;
`

export const ErrorMessage = styled.div`
    color: #CD5C5C;
    font-size: 1.2rem;
    padding: 1rem;
`

export const Content = styled.div`
    flex: 1 0 auto;
    color: ${textColor}
`
